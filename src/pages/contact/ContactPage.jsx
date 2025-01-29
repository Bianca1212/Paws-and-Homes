import { Button } from "../../components/Button";
import { ContactDiv } from "./ContactDiv";
import { SignInInput } from "../../components/sign-in/SignInInput";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import { FooterLayout } from "../../layouts/FooterLayout";

export const ContactPage = () => {
  return (
    <>
      <NavigationLayout>
        <section className="flex flex-col gap-5 items-center py-4 text-pennBlue font-merriWeather">
          <h1 className="mt-10 text-2xl sm:text-3xl font-semibold text-center drop-shadow-md">
            CONTACT US
          </h1>
          <p className="m-8 md:m-0 mt-8 text-xl sm:text-2xl font-semibold text-center drop-shadow-md">
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

        <FooterLayout />
      </NavigationLayout>
    </>
  );
};
