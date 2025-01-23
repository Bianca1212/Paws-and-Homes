import { useEffect } from "react";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { FirstMissionAndValuesSection } from "../../components/FirstMisionAndValuesSection";
import { SecondMissionAndValuesSection } from "../../components/SecondMissionAnValuesSection";

export const MissionAndValues = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <NavigationLayout>
        <section className="font-merriWeather relative">
          <img
            src="./images/mission&values.jpg"
            alt="Background Image"
            className="object-cover w-full h-96"
          />
          <div className="absolute lg:right-20 top-1/4 max-w-lg flex flex-col gap-2">
            <p
              className="font-bold text-beige text-2xl text-center"
              data-aos="fade-left"
            >
              We are here to provide compassionate care and quality veterinary
              services to ensure every pet`s health and happiness.
            </p>
            <p className="text-xl text-center text-beige" data-aos="fade-right">
              We understand. We commit. We help.
            </p>
          </div>
        </section>

        <div className="flex flex-col py-10 gap-10 bg-white">
          <FirstMissionAndValuesSection
            title={"Our Mission"}
            text={
              "At Paws & Homes Veterinary Clinic, our mission is to provide exceptional, compassionate veterinary care to all animals, with a focus on those in transition through adoption. In partnership with local adoption centers, we strive to improve the health and well-being of pets, ensuring they receive the medical attention they need to thrive."
            }
            src={"./images/mission.jpg"}
            alt={"Mision"}
            dataAos={"fade-left"}
            dataAosDelay={"500"}
          />

          <SecondMissionAndValuesSection
            title={"Our Vision"}
            text={
              "Our vision is to create a world where every animal has access to high-quality veterinary care and a safe, loving home. Through our collaborative efforts with adoption centers, we aim to be a beacon of hope for animals in need, ensuring that each one gets a fresh start, and each adopter is well-prepared for alifelong, healthy relationship with their pet. We envision a future where animal welfare is a shared priority in every community."
            }
            src={"./images/vision.jpg"}
            alt={"Vision"}
            dataAos={"fade-right"}
            dataAosDelay={"600"}
          />

          <FirstMissionAndValuesSection
            title={"Our Values"}
            text={
              "At our veterinary clinic, we are committed to providing compassionate, high-quality care for pets and their owners. Our core values center on empathy, integrity, and excellence, ensuring every animal receives personalized treatment in a supportive and professional environment. We prioritize the well-being of every pet, advocate for preventative care, and work closely with pet owners to make informed decisions."
            }
            src={"./images/values.jpg"}
            alt={"Values"}
            dataAos={"fade-left"}
            dataAosDelay={"700"}
          />
        </div>
      </NavigationLayout>
    </>
  );
};
