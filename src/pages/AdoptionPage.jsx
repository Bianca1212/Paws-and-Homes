import { useEffect } from "react";
import { Button } from "../components/Button";
import { FirstPresentationSection } from "../components/FirstPresentationSection";
import { PresentationCard } from "../components/PresentationCard";
import { SecondPresentationSection } from "../components/SecondPresentationSection";
import { NavigationLayout } from "../layouts/NavigationLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { FooterLayout } from "../layouts/FooterLayout";

export const AdoptionPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      <NavigationLayout>
        <img
          src="./images/adoption-bg.jpg"
          alt="Cat-and-Dog"
          className="w-full object-cover h-48 sm:h-64 md:h-72 lg:h-96"
        />
        <div className="flex flex-col bg-beige">
          <h1 className="text-center mt-12 text-xl sm:text-2xl font-josefin font-semibold text-pennBlue">
            DIFFERENT WAYS TO HELP OUR FURRY FRIENDS
          </h1>
          <section className="flex flex-col sm:flex-row gap-15 mb-20 mt-10 justify-around items-center">
            <PresentationCard
              title={"Give a Donation"}
              description={
                "By contributing, you support our mission to rescue, care for, and find loving homes for pets."
              }
              buttonName={"Read more"}
            >
              <img src="src\assets\donation.svg" alt="Donation" />
            </PresentationCard>

            <PresentationCard
              title={"Find a Pet"}
              description={
                "Looking for a new best friend? Search our listings for pets needing a new home or temporary foster care."
              }
              buttonName={"Read more"}
            >
              <img src="src\assets\paw.svg" alt="Paw" />
            </PresentationCard>
            <PresentationCard
              title={"Shelter Volunteer"}
              description={
                "Help pets in your community and come joining as a volunteer at your local animal shelter."
              }
              buttonName={"Read more"}
            >
              <img src="src\assets\shelter.svg" alt="Shelter" />
            </PresentationCard>
          </section>
          <FirstPresentationSection
            title={"ADOPT A CAT"}
            description={
              "Looking for a furry friend to share your home and heart? Adopt a cat today! Whether you’re seeking a playful kitten or a calmcompanion, we have a variety of loving cats ready to become part of your family. Give them a second chance and make a lifelong connection. Visit us and meet your purrfect match!"
            }
            src={"./images/cat.jpg"}
            alt={"Cat"}
            dataAos={"fade-right"}
          >
            <Button
              path={""}
              className="font-josefin bg-pennBlue hover:bg-midnightGreen p-3 text-white font-semibold mt-5 mb-10 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg"
            >
              SEE MORE
            </Button>
          </FirstPresentationSection>

          <SecondPresentationSection
            title={"ADOPT A DOG"}
            description={
              " Ready to welcome unconditional love into your life? Adopt a dog today! From energetic pups to loyal seniors, we have a variety of dogs looking for their forever home. Make a difference by giving them a loving family. Visit us and find your new best friend!"
            }
            src={"./images/dog.jpg"}
            alt={"Dog"}
            dataAos={"fade-left"}
          >
            <Button
              path={""}
              className="font-josefin bg-pennBlue hover:bg-midnightGreen p-3 text-white font-semibold mt-5 mb-10 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg"
            >
              SEE MORE
            </Button>
          </SecondPresentationSection>
        </div>
        <FooterLayout />
      </NavigationLayout>
    </>
  );
};
