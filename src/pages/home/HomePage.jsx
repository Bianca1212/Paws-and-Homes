import { Button } from "../../components/Button";
import { PresentationCard } from "../../components/PresentationCard";
import { NavigationLayout } from "../../layouts/NavigationLayout";

export const HomePage = () => {
  return (
    <>
      <NavigationLayout>
        <img
          src="./images/homepage-img.jpg"
          alt="Cat-and-Dog"
          className="w-full object-cover h-48 sm:h-64 md:h-72 lg:h-128"
        />
        <section className="font-merriWeather flex flex-col items-center justify-center bg-beige gap-6 py-16 px-6 sm:px-12 md:px-24 lg:px-32 shadow-lg">
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
            className="bg-pennBlue hover:bg-camel p-3 text-white font-semibold my-5 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg"
          >
            MAKE AN APPOINTMENT
          </Button>
        </section>

        <section className="font-merriWeather flex flex-col items-center justify-center gap-7 py-10 px-6 sm:px-12 md:px-24 lg:px-32 shadow-lg">
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
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#124559"
                width="90px"
                height="90px"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.8 4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V6C3 4.9 3.9 4 5 4H9.2C9.6 2.8 10.7 2 12 2C13.3 2 14.4 2.8 14.8 4ZM13 5C13 4.5 12.5 4 12 4C11.5 4 11 4.5 11 5C11 5.5 11.5 6 12 6C12.5 6 13 5.5 13 5ZM11.6648 15.0447L8.38178 8.08094L6.25697 13.0004H5V14.5004H7.24303L8.44159 11.7254L11.4602 18.1285L14.1716 13.9261L15.8527 16.6653L17.6075 14.5004H19V13.0004H16.8925L16.0223 14.0739L14.2034 11.1101L11.6648 15.0447Z"
                />
              </svg>
            </PresentationCard>
            <PresentationCard
              title={"Wellness"}
              description={
                "Comprehensive Wellness Care for a Healthy Pet — Preventative Services to Keep Your Companion Thriving"
              }
              buttonName={"Read more"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90px"
                height="90px"
                viewBox="0 0 400 400"
                fill="none"
              >
                <path
                  d="M245.2 134.289C294.12 73.9855 219.025 82.2174 208.126 76.763C204.296 74.849 200.528 56.3705 192.005 60.6375C178.88 67.2036 179.995 101.383 178.571 112.785C177.798 118.991 169.133 127.877 166.285 134.289C161.739 144.521 156.744 156.692 148.393 169.402C140.043 182.113 122.592 191.967 113.857 201.681C76.682 243.002 92.6204 291.579 133.435 322.992C174.716 354.764 347.131 342.906 298.399 269.769"
                  stroke="#8B4000"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M225.903 162.283C238.018 206.627 220.627 252.936 220.627 296.357C220.627 301.354 230.543 296.532 235.401 297.425"
                  stroke="#8B4000"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M162.667 208.879C172.419 210.315 181.319 217.474 188.222 224.166C222.582 257.481 178.688 279.87 176.257 291.647C175.708 294.311 187.035 296.145 189.31 296.389"
                  stroke="#8B4000"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M211.536 62.994C218.161 56.7795 219.425 67.6568 220.627 73.6378"
                  stroke="#CC5500	"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </PresentationCard>
            <PresentationCard
              title={"Surgery"}
              description={
                "Expert Surgical Care with Compassion — Safe, Precise Procedures for Your Pet’s Health and Recovery"
              }
              buttonName={"Read more"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90px"
                height="90px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 22L2 22"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17 22V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V22"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                />
                <path
                  opacity="0.5"
                  d="M21 22V8.5C21 7.09554 21 6.39331 20.6629 5.88886C20.517 5.67048 20.3295 5.48298 20.1111 5.33706C19.6067 5 18.9045 5 17.5 5"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                />
                <path
                  opacity="0.5"
                  d="M3 22V8.5C3 7.09554 3 6.39331 3.33706 5.88886C3.48298 5.67048 3.67048 5.48298 3.88886 5.33706C4.39331 5 5.09554 5 6.5 5"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 22V19"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  opacity="0.5"
                  d="M10 12H14"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  opacity="0.5"
                  d="M5.5 11H7"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  opacity="0.5"
                  d="M5.5 14H7"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  opacity="0.5"
                  d="M17 11H18.5"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  opacity="0.5"
                  d="M17 14H18.5"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  opacity="0.5"
                  d="M5.5 8H7"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  opacity="0.5"
                  d="M17 8H18.5"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  opacity="0.5"
                  d="M10 15H14"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 9V5"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 7L10 7"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </PresentationCard>
          </div>
        </section>

        <section className="font-merriWeather bg-columbiaBlue text-pennBlue flex flex-col lg:flex-row items-center justify-center gap-3 py-10 px-6 sm:px-12 md:px-24 lg:px-32 shadow-lg">
          <img
            src="./images/about-team.jpg"
            alt="Cat-and-Dog"
            className="md:ml-20 w-full object-cover h-42 sm:h-64 md:h-72 lg:h-96 rounded-full shadow-lg"
          />
          <div className="flex flex-col md:flex-row md:flex-col items-center justify-center gap-7">
            <h1 className="mt-10 text-2xl sm:text-3xl font-semibold drop-shadow-lg">
              MEET OUR TEAM
            </h1>
            <p className="text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-xl leading-relaxed drop-shadow-md">
              Our knowledgeable and compassionate team is made up of life-long
              animal lovers dedicated to providing your animals the best in
              veterinary care.
            </p>
            <Button
              path={"/team"}
              className="bg-pennBlue hover:bg-midnightGreen p-3 text-white font-semibold mt-5 mb-10 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg"
            >
              GET TO KNOW US
            </Button>
          </div>
        </section>

        <section className="font-merriWeather bg-beige flex flex flex-col lg:flex-row items-center justify-center gap-7 py-16 px-6 sm:px-12 md:px-24 lg:px-32 shadow-lg">
          <div className="flex flex-col items-center justify-center gap-7">
            <h1 className="mt-5 md:mt-20 text-2xl sm:text-3xl font-semibold text-pennBlue drop-shadow-md">
              ADOPTION PARTNERSHIPS
            </h1>
            <p className="text-center w-full text-gray-800 text-xl drop-shadow-md">
              We proudly collaborate with adoption associations to help find
              loving homes for pets in need. Through these partnerships, we
              offer veterinary care, support, and guidance to ensure every
              adopted animal stays healthy and happy in their new home.
            </p>
            <Button
              path={"/adoptions"}
              className="bg-pennBlue hover:bg-midnightGreen  p-3 text-white font-semibold mt-5 mb-10 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg"
            >
              SEE MORE
            </Button>
          </div>
          <img
            src="./images/adoption-img.jpg"
            alt="Adoption"
            className="md:mr-20 w-full object-cover h-48 sm:h-64 md:h-72 lg:h-96 rounded-full shadow-lg"
          />
        </section>
        <section className="font-merriWeather flex items-center justify-end">
          <div className="flex flex-col items-center justify-center gap-4 mx-10 my-4">
            <h1 className="mt-2 text-xl sm:text-2xl font-semibold drop-shadow-md">
              COME VISIT US
            </h1>
            <p className="text-center w-full text-gray-800">
              <strong>Address:</strong> Paws & Homes Veterinary Clinic
              <br /> 1234 Pet Lane,
              <br /> Suite 101 Hometown, AN 54321 <br />
              <strong>Phone Number:</strong> (555) 123-4567
            </p>
          </div>
        </section>
      </NavigationLayout>
    </>
  );
};
