import { ContactDiv } from "../pages/contact/ContactDiv";

export const FooterLayout = () => {
  return (
    <>
      <section className="py-2 flex flex-col gap-10 justify-around items-center bg-white font-merriWeather py-10">
        <div className="flex flex-col lg:flex-row gap-20 p-5 mt-10">
          <ContactDiv>
            <img src="src\assets\phone.svg" alt="Phone" />
            <p className="font-semibold">Phone Number</p>
            <p className="text-gray-800">(555) 123-4567</p>
          </ContactDiv>
          <ContactDiv>
            <img src="src\assets\email.svg" alt="Email" />
            <p className="font-semibold">Email</p>
            <p className="text-gray-800">paws&homes@gmail.com</p>
          </ContactDiv>
          <ContactDiv>
            <img src="src\assets\location.svg" alt="Location" />
            <p className="font-semibold">Location</p>
            <p className="text-gray-800">1234 Pet Lane</p>
            <p className="text-gray-800">Suite 101 Hometown, AN 54321</p>
          </ContactDiv>
          <ContactDiv>
            <img src="src\assets\clock.svg" alt="Clock" />
            <p className="font-semibold">Working Hours</p>
            <p className="text-gray-800">Monday to Saturday</p>
            <p className="text-gray-800">09:00 AM To 09:00 PM</p>
          </ContactDiv>
        </div>
      </section>
    </>
  );
};
