import { useRef, useState } from "react";
import { Button } from "../../components/Button";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import { useForm } from "../../hooks/useForm";
import { FormInput } from "../../components/FormInput";
import { FormSelect } from "../../components/FormSelect";
import { Calendar } from "../../pages/appointment/Calendar";
import axios from "axios";
import { FooterLayout } from "../../layouts/FooterLayout";

export const AppointmentForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date(day of month)
  const [availableHours, setAvailableHours] = useState([
    // State for available hours in a day
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ]);
  const [selectedHour, setSelectedHour] = useState(null); // State for selected hour(from available hours)
  const [bookedHours, setBookedHours] = useState([]); // State for hours already selected
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const hoursModalRef = useRef(null); // Refference for select hour modal

  // Hook used to manage form values
  const { values, handleChange, resetForm } = useForm({
    firstName: "",
    lastName: "",
    petName: "",
    petAge: "",
    petType: "",
    petGender: "",
    desexed: "",
    appointmentReason: "",
  });

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!values.firstName) {
      newErrors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      newErrors.lastName = "Last Name is required";
    }
    if (!values.petAge) {
      newErrors.petAge = "Pet's Age is required";
    }
    if (!values.petType) {
      newErrors.petType = "Pet's Type is required";
    }
    if (!values.petGender) {
      newErrors.petGender = "Pet's Gender is required";
    }
    if (!values.appointmentReason) {
      newErrors.appointmentReason = "Reason is required";
    }
    if (!selectedDate) {
      newErrors.selectedDate = "Please select a date and a time";
    }

    return newErrors;
  };

  const handleSelectedDate = (date) => {
    const formattedDate = date.toLocaleDateString();
    setSelectedDate(formattedDate);
    checkIfHourIsBooked(formattedDate);

    if (hoursModalRef.current) {
      hoursModalRef.current.classList.remove("hidden"); // Makes the modal visible
    }
  };

  const closeHoursModal = () => {
    if (hoursModalRef.current) {
      hoursModalRef.current.classList.add("hidden"); // Hides the modal
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formErrors = validateForm();
    if (formErrors && Object.keys(formErrors).length > 0) {
      // Object.keys(formErrors) este o metodă care returnează un array conținând toate cheile din obiectul formErrors
      setErrors(formErrors);
      return;
    }

    // Check if selected our is already booked
    if (bookedHours.includes(selectedHour)) {
      alert("The selected hour is already booked. Please choose another hour.");
      return;
    }

    setLoading(true);

    // Creates an object for the new appointment
    const newAppointment = {
      ...values,
      appointmentDate: selectedDate,
      appointmentTime: selectedHour,
    };

    try {
      console.log("Sending to server:", newAppointment);

      await axios.post("http://localhost:3000/appointments", newAppointment);
      setBookedHours([...bookedHours, selectedHour]); // Adds selected hour to the list of hours already booked
      alert("Appointment successfully booked!");
      resetForm();
      setSelectedDate(null);
      setSelectedHour(null);
      // checkIfHourIsBooked(selectedDate);
    } catch (error) {
      ("Failed to book appointment. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleHourSelection = (hour) => {
    // Dacă ora nu este deja rezervată
    if (bookedHours.includes(hour)) {
      alert("This hour is already booked. Please select another one.");
      return;
    }
    // Setează ora selectată
    setSelectedHour(hour);
    alert("Appointment booked for " + hour);
  };

  const checkIfHourIsBooked = async (selectedDate) => {
    try {
      // Obținem programările existente pentru a verifica ce ore sunt deja rezervate
      const appointmentResponse = await axios.get(
        "http://localhost:3000/appointments"
      );
      const appointments = appointmentResponse.data;

      // Filtrăm programările care corespund datei selectate
      const bookedHoursForSelectedDate = appointments
        .filter((appointment) => appointment.appointmentDate === selectedDate)
        .map((appointment) => appointment.appointmentTime);

      // Setăm orele deja rezervate
      setBookedHours(bookedHoursForSelectedDate);
      // Filtrăm orele disponibile
      const allAvailableHours = [
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
      ];

      const updatedAvailableHours = allAvailableHours.filter(
        (hour) => !bookedHoursForSelectedDate.includes(hour)
      );
      setAvailableHours(updatedAvailableHours);
    } catch (error) {
      alert("Error checking booked hours: " + error.message);
    }
  };

  return (
    <>
      <NavigationLayout>
        <div className="w-full h-screen bg-columbiaBlue relative">
          <div className="p-12 md:w-2/3 md:h-auto bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-row gap-5 items-center rounded-md shadow-lg">
            <img
              src="./images/form-img.jpg"
              alt="Vision"
              className="hidden lg:block w-30 h-48 sm:h-64 md:h-72 lg:h-80"
            />
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="mt-3 text-lg text-center md:text-2xl text-pennBlue font-semibold">
                Book an appointment for your pet
              </h1>
              <form className="p-10 flex flex-wrap justify-center items-center gap-5">
                <div className="flex flex-col">
                  <FormInput
                    type={"text"}
                    name={"firstName"}
                    placeholder={"Owner's First Name"}
                    value={values.firstName}
                    onChange={handleChange}
                    className="w-44 h-8 sm:w-74 sm:h-14 p-3 cursor-pointer border-2 border-gray-500 text-center rounded-md placeholder:text-gray-500 text-base leading-normal"
                    error={errors.firstName}
                  />
                </div>
                <div className="flex flex-col">
                  <FormInput
                    type={"text"}
                    name={"lastName"}
                    placeholder={"Owner's Last Name"}
                    value={values.lastName}
                    onChange={handleChange}
                    className="w-44 h-8 sm:w-74 sm:h-14 p-3 cursor-pointer border-2 border-gray-500 text-center rounded-md placeholder:text-gray-500 text-base leading-normal"
                    error={errors.lastName}
                  />
                </div>

                <FormInput
                  type={"text"}
                  name={"petName"}
                  placeholder={"Pets's Name"}
                  value={values.petName}
                  onChange={handleChange}
                  className="w-44 h-8 sm:w-74 sm:h-14 p-3 cursor-pointer border-2 border-gray-500 text-center rounded-md placeholder:text-gray-500 text-base leading-normal"
                />
                <div className="flex flex-col">
                  <FormInput
                    type={"number"}
                    name={"petAge"}
                    placeholder={"Pets's Age"}
                    value={values.petAge}
                    onChange={handleChange}
                    className=" w-44 h-8 sm:w-74 sm:h-14 p-3 cursor-pointer border-2 border-gray-500 text-center rounded-md placeholder:text-gray-500 text-base leading-normal"
                    error={errors.petAge}
                  />
                </div>
                <div className="flex flex-col">
                  <FormSelect
                    name={"petType"}
                    value={values.petType}
                    onChange={handleChange}
                  >
                    <option value="">Pet Type</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="turtle">Turtle</option>
                    <option value="other">Other</option>
                  </FormSelect>
                  {errors.petType && (
                    <p className="text-red-500 text-center">{errors.petType}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <FormSelect
                    name={"petGender"}
                    value={values.petGender}
                    onChange={handleChange}
                  >
                    <option value="">Pet Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </FormSelect>
                  {errors.petGender && (
                    <p className="text-red-500 text-center">
                      {errors.petGender}
                    </p>
                  )}
                </div>
                <FormSelect
                  name={"desexed"}
                  value={values.desexed}
                  onChange={handleChange}
                >
                  <option value="" className="text-gray-500">
                    Desexed?
                  </option>
                  <option value="spayed/neutered">Spayed/Neutered</option>
                  <option value="no">No</option>
                </FormSelect>
                <div className="flex flex-col">
                  <FormSelect
                    name={"appointmentReason"}
                    value={values.appointmentReason}
                    onChange={handleChange}
                  >
                    <option value="" className="text-gray-500">
                      Reason
                    </option>
                    <option value="vaccination">Vaccination</option>
                    <option value="check-up">Check-up</option>
                    <option value="dental-procedure">Dental Procedure</option>
                    <option value="lab-test">Lab Test</option>
                    <option value="other-reason">Other</option>
                  </FormSelect>
                  {errors.appointmentReason && (
                    <p className="text-red-500 text-center">
                      {errors.appointmentReason}
                    </p>
                  )}
                </div>
                <div className="flex justify-center gap-8">
                  <Button
                    className="mb-3 p-2 bg-pennBlue hover:bg-midnightGreen rounded-md text-white hover:scale-110 hover:bg-blue-200"
                    onClick={openModal}
                  >
                    Select a schedule
                  </Button>
                  <div className="flex flex-col">
                    <Button
                      className="mb-3 p-2 bg-pennBlue hover:bg-midnightGreen rounded-md text-white hover:scale-110 hover:bg-blue-200"
                      disabled={loading}
                      onClick={handleSubmit}
                    >
                      {loading ? "Booking..." : "Book Appointment"}
                    </Button>
                    {errors.selectedDate && (
                      <p className="text-red-500 text-center">
                        {errors.selectedDate}
                      </p>
                    )}
                  </div>
                </div>
              </form>

              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded shadow-md max-w-lg w-full relative flex justify-center items-center">
                    <button
                      className="absolute top-2 right-2"
                      onClick={closeModal}
                    >
                      &times;
                    </button>
                    <Calendar onDateSelect={handleSelectedDate} />
                  </div>
                </div>
              )}
              {selectedDate && availableHours && availableHours.length > 0 && (
                <div
                  ref={hoursModalRef}
                  className="absolute top-1/2 left-[80%] transform -translate-y-1/2 p-4 bg-white rounded-lg shadow-md w-80 z-50"
                >
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Available hours for {selectedDate}:
                  </h3>
                  <button
                    className="absolute top-2 right-2"
                    onClick={closeHoursModal}
                  >
                    &times;
                  </button>
                  <ul className="space-y-2">
                    {availableHours.map((hour, index) => (
                      <li
                        key={index}
                        className={`p-2 ${
                          bookedHours.includes(hour)
                            ? "bg-gray-300 cursor-not-allowed"
                            : hour === selectedHour
                            ? "bg-gray-300"
                            : "bg-columbiaBlue hover:bg-midnightGreen hover:text-white cursor-pointer"
                        } rounded-md text-center text-gray-700`}
                        onClick={() =>
                          !bookedHours.includes(hour) &&
                          handleHourSelection(hour)
                        }
                      >
                        {bookedHours.includes(hour)
                          ? "Appointment booked"
                          : hour}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <FooterLayout />
      </NavigationLayout>
    </>
  );
};
