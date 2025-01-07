import { useRef, useState } from "react";
import { Button } from "../../components/Button";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import { useForm } from "../../hooks/useForm";
import { FormInput } from "../../components/FormInput";
import { FormSelect } from "../../components/FormSelect";
import { Calendar } from "../../components/Calendar";

export const AppointmentForm = () => {
  // const [appointmentDate, setAppointmentDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableHours, setAvailableHours] = useState(null);
  const hoursModalRef = useRef(null);

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

  const handleSelectedDate = (date) => {
    setSelectedDate(date.toLocaleDateString());
    const hoursForSelectedDate = [
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
    ];

    setAvailableHours(hoursForSelectedDate);

    if (hoursModalRef.current) {
      hoursModalRef.current.classList.remove("hidden");
    }
  };

  const closeHoursModal = () => {
    if (hoursModalRef.current) {
      hoursModalRef.current.classList.add("hidden");
    }
  };

  return (
    <>
      <NavigationLayout>
        <div className="w-full h-screen bg-lightBlue relative">
          <div className="px-5 w-2/3 h-3/4 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-row gap-5 items-center rounded-md shadow-lg">
            <img
              src="./images/form-img.jpg"
              alt="Vision"
              className="w-30 h-48 sm:h-64 md:h-72 lg:h-80"
            />
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-2xl text-gray-700 font-semibold">
                Book an appointment for your pet
              </h1>
              <form className="p-10 flex flex-wrap justify-center items-center gap-5">
                <FormInput
                  type={"text"}
                  name={"firstName"}
                  placeholder={"Owner's First Name"}
                  value={values.firstName}
                  onChange={handleChange}
                />
                <FormInput
                  type={"text"}
                  name={"lastName"}
                  placeholder={"Owner's Last Name"}
                  value={values.lastName}
                  onChange={handleChange}
                />
                <FormInput
                  type={"text"}
                  name={"petName"}
                  placeholder={"Pets's Name"}
                  value={values.petName}
                  onChange={handleChange}
                />
                <FormInput
                  type={"number"}
                  name={"petAge"}
                  placeholder={"Pets's Age"}
                  value={values.petAge}
                  onChange={handleChange}
                />

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

                <FormSelect
                  name={"petGender"}
                  value={values.petGender}
                  onChange={handleChange}
                >
                  <option value="">Pet Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </FormSelect>
                <FormSelect
                  name={"desexed"}
                  value={values.desexed}
                  onChange={handleChange}
                >
                  <option value="">Desexed?</option>
                  <option value="spayed/neutered">Spayed/Neutered</option>
                  <option value="no">No</option>
                </FormSelect>
                <FormSelect
                  name={"appointmentReason"}
                  value={values.appointmentReason}
                  onChange={handleChange}
                >
                  <option value="">Reason of appointment</option>
                  <option value="vaccination">Vaccination</option>
                  <option value="check-up">Check-up</option>
                  <option value="dental-procedure">Dental Procedure</option>
                  <option value="lab-test">Lab Test</option>
                  <option value="other-reason">Other</option>
                </FormSelect>
              </form>
              <div className="flex justify-center">
                <Button
                  className="p-2 bg-lightBlue rounded-md text-gray-800 hover:scale-110 hover:bg-blue-200"
                  onClick={openModal}
                >
                  Select a schedule
                </Button>
              </div>

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
                        className="p-2 bg-lightBlue rounded-md text-center text-gray-700 hover:bg-blue-200 cursor-pointer"
                      >
                        {hour}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </NavigationLayout>
    </>
  );
};
