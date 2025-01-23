import { Button } from "../../components/Button";
import { ContactDiv } from "../../components/ContactDiv";
import { SignInInput } from "../../components/sign-in/SignInInput";
import { NavigationLayout } from "../../layouts/NavigationLayout";

export const ContactPage = () => {
  return (
    <>
      <NavigationLayout>
        <section className="flex flex-col gap-5 items-center py-4 text-pennBlue">
          <h1 className="mt-10 text-2xl sm:text-3xl font-semibold text-center drop-shadow-md">
            CONTACT US
          </h1>
          <p className="m-8 md:m-0 mt-8 text-xl sm:text-2xl font-josefin font-semibold text-center drop-shadow-md">
            Any questions or remarks? Just write us a message!
          </p>
          <div className="flex flex-col gap-10 justify-center">
            <SignInInput placeholder={"Enter your Name"} />
            <SignInInput placeholder={"Enter a Valid Email address"} />
            <textarea
              placeholder="Write here..."
              rows={10}
              className="font-josefin sm:w-96 sm:h-14 p-4 cursor-pointer border-2 border-gray-500 border-pennBlue text-center rounded-md placeholder:font-bold hover:placeholder:text-white hover:placeholder:font-bold focus:outline-none"
            />
          </div>
          <Button className="bg-pennBlue hover:bg-midnightGreen text-white hover:bg-chocolate p-3 rounded-md font-semibold">
            Submit
          </Button>
        </section>

        {/* Contact Section */}
        <section className="mt-10 py-4 flex flex-col gap-10 justify-around items-center bg-gray-300">
          <h2 className="text-xl sm:text-2xl text-gray-800">
            Contact Information
          </h2>
          <div className="flex flex-col lg:flex-row gap-20">
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
      </NavigationLayout>
    </>
  );
};
