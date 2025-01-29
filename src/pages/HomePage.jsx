import { useEffect } from "react";
import { Button } from "../components/Button";
import { PresentationCard } from "../components/PresentationCard";
import { NavigationLayout } from "../layouts/NavigationLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { FirstPresentationSection } from "../components/FirstPresentationSection";
import { SecondPresentationSection } from "../components/SecondPresentationSection";
import { FooterLayout } from "../layouts/FooterLayout";

export const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <NavigationLayout>
        <img
          src="./images/homepage-img.jpg"
          alt="Cat-and-Dog"
          className="w-full object-cover h-48 sm:h-64 md:h-72 lg:h-128"
        />
        <section
          className="font-merriWeather flex flex-col items-center justify-center bg-beige gap-6 py-16 px-6 sm:px-12 md:px-24 lg:px-32 shadow-lg"
          data-aos="fade-up"
        >
          <h1 className="text-2xl sm:text-3xl font-semibold text-pennBlue drop-shadow-md text-center">
            WELCOME TO
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-midnightGreen drop-shadow-lg text-center">
            PAWS & HOMES VETERINARY CLINIC
          </h2>
          <p className="text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-gray-800 text-xl leading-relaxed drop-shadow-md">
            At Paws & Homes, we understand the deep bond between pets and their
            families. Our mission is to provide exceptional veterinary care that
            not only addresses your pet’s health needs but also supports the
            broader community by partnering with local animal adoption
            organizations. Whether you’re looking for comprehensive veterinary
            services to ensure your pet’s well-being or you’re interested in
            adopting a new companion, we are here to help. <br /> <br />
            Our clinic offers a wide range of services to ensure that every pet
            in our care receives the best possible treatment. From routine
            wellness exams and vaccinations to emergency surgeries and
            specialized care, our experienced team is dedicated to keeping your
            pet happy and healthy. But our commitment goes beyond medical
            care—we also collaborate closely with animal adoption associations
            to help homeless pets find their forever homes.
          </p>
          <Button
            path={"/appointment"}
            className="bg-pennBlue hover:bg-midnightGreen p-3 text-white font-semibold my-5 transform transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl rounded-lg"
          >
            MAKE AN APPOINTMENT
          </Button>
        </section>

        <section
          className="font-merriWeather flex flex-col items-center justify-center gap-7 py-10 px-6 sm:px-12 md:px-24 lg:px-32 shadow-lg"
          data-aos="fade-up"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-midnightGreen drop-shadow-lg text-center">
            PREVENTIVE PET CARE AND VETERINARY SERVICES
          </h1>
          <p className="text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-gray-800 text-xl leading-relaxed drop-shadow-md">
            We offer comprehensive services for large and small animals, with a
            focus on preventative care such as annual wellness exams,
            vaccinations, nutritional counseling, and parasite prevention. Our
            skilled and caring medical team is also here when the animal you
            care about needs experienced diagnostics, orthopedic services, and
            more.
          </p>
          <div className="flex flex-col lg:flex-row gap-10 justify-center sm:justify-around">
            <PresentationCard
              title={"Diagnostic"}
              description={
                "Precise Diagnostics for Your Pet's Health — Ensuring Accurate, Timely Care with Advanced Technology and Expertise"
              }
              buttonName={"Read more"}
              dataAos={"fade-left"}
              // dataAosDuration={"1000"}
              dataAosDelay={"500"}
            >
              <img src="src\assets\diagnostic.svg" alt="Diagnostic" />
            </PresentationCard>
            <PresentationCard
              title={"Wellness"}
              description={
                "Comprehensive Wellness Care for a Healthy Pet — Preventative Services to Keep Your Companion Thriving"
              }
              buttonName={"Read more"}
              dataAos={"fade-left"}
              dataAosDelay={"1000"}
            >
              <img src="src\assets\wellness.svg" alt="Wellness" />
            </PresentationCard>
            <PresentationCard
              title={"Surgery"}
              description={
                "Expert Surgical Care with Compassion — Safe, Precise Procedures for Your Pet’s Health and Recovery"
              }
              buttonName={"Read more"}
              dataAos={"fade-left"}
              dataAosDelay={"1500"}
            >
              <img src="src\assets\surgery.svg" alt="Surgery" />
            </PresentationCard>
          </div>
        </section>

        <FirstPresentationSection
          title={"MEET OUR TEAM"}
          description={
            "Our knowledgeable and compassionate team is made up of life-long animal lovers dedicated to providing your animals the best in veterinary care."
          }
          buttonName={"SEE MORE"}
          src={"./images/about-team.jpg"}
          alt={"Doctor-and-Dog"}
          dataAos={"fade-right"}
          dataAosDelay={"900"}
        >
          <Button
            path={"/team"}
            className="font-merriWeather bg-pennBlue hover:bg-midnightGreen p-3 text-white font-semibold mt-5 mb-10 transform transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl rounded-lg"
          >
            SEE MORE
          </Button>
        </FirstPresentationSection>
        <SecondPresentationSection
          title={"ADOPTION PARTNERSHIPS"}
          description={
            "We proudly collaborate with adoption associations to help find loving homes for pets in need. Through these partnerships, we offer veterinary care, support, and guidance to ensure every adopted animal stays healthy and happy in their new home."
          }
          src={"./images/adoption-img.jpg"}
          alt={"Volunteer-and-Dog"}
          dataAos={"fade-left"}
        >
          <Button
            path={"/adoptions"}
            className="font-merriWeather bg-pennBlue hover:bg-midnightGreen p-3 text-white font-semibold mt-5 mb-10 transform transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl rounded-lg"
          >
            SEE MORE
          </Button>
        </SecondPresentationSection>
        <FooterLayout />
      </NavigationLayout>
    </>
  );
};
