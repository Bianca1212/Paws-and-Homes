import { AnotherMissionAndValuesSection } from "../../components/missionAndValues/AnotherMissionAndValuesSection";
import { MissionAndValuesSection } from "../../components/missionAndValues/MissionAndValuesSection";
import { NavigationLayout } from "../../layouts/NavigationLayout";

export const MissionAndValues = () => {
  return (
    <>
      <NavigationLayout>
        <section className="relative">
          <img
            src="./images/mission&values.jpg"
            alt="Background Image"
            className="object-cover w-full h-96"
          />
          <div className="absolute lg:right-20 top-1/4 max-w-lg flex flex-col gap-2">
            <p className="font-bold font-josefin text-beige text-2xl text-center">
              We are here to provide compassionate care and quality veterinary
              services to ensure every pet`s health and happiness.
            </p>
            <p className="font-josefin text-xl text-center text-beige">
              We understand. We commit. We help.
            </p>
          </div>
        </section>

        <div className="flex flex-col py-10 gap-5">
          <MissionAndValuesSection
            title={"Our Mission"}
            text={
              "At Paws & Homes Veterinary Clinic, our mission is to provide exceptional, compassionate veterinary care to all animals, with a focus on those in transition through adoption. <br />In partnership with local adoption centers, we strive to improve the health and well-being of pets, ensuring they receive the medical attention they need to thrive."
            }
            src={"./images/mission.jpg"}
            alt={"Mision"}
          />

          <AnotherMissionAndValuesSection
            title={"Our Vision"}
            text={
              "Our vision is to create a world where every animal has access to high-quality veterinary care and a safe, loving home. <br />Through our collaborative efforts with adoption centers, we aim to be a beacon of hope for animals in need, ensuring that each one gets a fresh start, and each adopter is well-prepared for alifelong, healthy relationship with their pet. We envision a future where animal welfare is a shared priority in every community."
            }
            src={"./images/vision.jpg"}
            alt={"Vision"}
          />

          <MissionAndValuesSection
            title={"Our Values"}
            text={
              "At our veterinary clinic, we are committed to providing compassionate, high-quality care for pets and their owners. <br /> Our core values center on empathy, integrity, and excellence, ensuring every animal receives personalized treatment in a supportive and professional environment. <br />We prioritize the well-being of every pet, advocate for preventative care, and work closely with pet owners to make informed decisions."
            }
            src={"./images/values.jpg"}
            alt={"Values"}
          />
        </div>
      </NavigationLayout>
    </>
  );
};
