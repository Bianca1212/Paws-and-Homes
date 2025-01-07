import PropTypes from "prop-types";
import { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { Button } from "../components/Button";
import { SignInSection } from "../components/sign-in/SignInSection";
import { NavigationButtonWithMenu } from "../components/navigation/NavigationButtonWithMenu";
import { Link } from "react-router-dom";

export const NavigationLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSignIn = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const toggleSubMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <>
      <div className="relative flex justify-between items-center">
        <div className="flex flex-col sm:flex-row gap-10 items-center justify-center md:mx-5 mt-5 w-full">
          <img
            src="./images/logo.jpg"
            alt="Logo"
            className="sm:max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl h-20 cursor-pointer"
          />
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <h1 className="font-josefin p-3 rounded-lg text-center sm:max-w-xs md:max-w-sm lg:w-25 cursor-pointer hover:scale-110 font-bold">
              FIND ALL ABOUT OUR SERVICES
            </h1>
            <Button
              onClick={toggleMenu}
              className="cursor-pointer hover:scale-110"
            >
              {isMenuOpen ? <FaSortUp /> : <FaSortDown />}
            </Button>
          </div>
          <div className="flex flex-row gap-5">
            <Link to={"/home"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43px"
                height="43px"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M31.52 42.781C30.4414 42.7836 29.4077 43.2133 28.645 43.976C27.8823 44.7387 27.4527 45.7724 27.45 46.851V54.781H35.6V46.851C35.5968 45.7708 35.1656 44.7359 34.4009 43.9731C33.6361 43.2102 32.6002 42.7815 31.52 42.781Z"
                  fill="#191970"
                />
                <path
                  d="M56.72 25.981L50.21 21.101L47.12 18.7809L35.43 10.0009C34.3004 9.16314 32.9314 8.71082 31.525 8.71082C30.1187 8.71082 28.7496 9.16314 27.62 10.0009L17.5 17.601L12.93 21.0269C12.6258 21.2484 12.3474 21.5034 12.1 21.787L6.3 26.287C5.88228 26.6137 5.61022 27.092 5.54283 27.618C5.47544 28.1441 5.61816 28.6754 5.94002 29.097C6.12874 29.3381 6.37014 29.5328 6.64574 29.6663C6.92133 29.7998 7.22381 29.8684 7.53001 29.8669C7.97265 29.87 8.40306 29.7218 8.75002 29.447L10.33 28.2169V48.2769C10.3316 50.0004 11.0169 51.6528 12.2356 52.8714C13.4542 54.09 15.1066 54.7754 16.83 54.7769H23.45V46.847C23.4524 44.7074 24.3034 42.6561 25.8163 41.1432C27.3292 39.6303 29.3804 38.7793 31.52 38.7769C33.6611 38.7772 35.7146 39.6272 37.2296 41.1403C38.7445 42.6534 39.5971 44.7058 39.6 46.847V54.7769H46.23C47.9529 54.7735 49.6042 54.0876 50.8224 52.8694C52.0406 51.6511 52.7266 49.9998 52.73 48.2769V27.9869L54.32 29.1769C54.6659 29.4372 55.0871 29.5777 55.52 29.5769C55.8305 29.5769 56.1367 29.5047 56.4144 29.3658C56.6922 29.227 56.9337 29.0253 57.12 28.7769C57.2786 28.5676 57.3942 28.3289 57.46 28.0746C57.5258 27.8203 57.5405 27.5555 57.5033 27.2955C57.4661 27.0355 57.3777 26.7854 57.2433 26.5598C57.1088 26.3341 56.931 26.1374 56.72 25.981Z"
                  fill="#191970"
                />
              </svg>
            </Link>
            <div className="flex flex-row gap-2 mr-10 cursor-pointer bg-midnightBlue p-2 rounded-full hover:scale-110 hidden md:flex md:items-center">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                className="text-white"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
              <Button
                className="whitespace-nowrap font-josefin text-white"
                onClick={toggleSignIn}
              >
                SIGN IN
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isSignInModalOpen && <SignInSection onClick={closeSignInModal} />}

      {isMenuOpen && (
        <div className="m-0 absolute top-22 left-0 right-0 p-3 gap-4 sm:gap-5 flex flex-col sm:flex-row justify-center z-40 bg-midnightBlue">
          <NavigationButtonWithMenu
            title={"ABOUT US"}
            isMenuOpen={activeMenu === "about"}
            toggleMenu={() => toggleSubMenu("about")}
            menuItems={[
              { name: "Contact", url: "/contact" },
              { name: "Our Team", url: "/team" },
              { name: "Mission&Values", url: "/mission&values" },
              { name: "Photo Gallery", url: "/gallery" },
            ]}
            menuName={"isAboutMenuOpen"}
          />

          <NavigationButtonWithMenu
            title={"SERVICES"}
            isMenuOpen={activeMenu === "services"}
            toggleMenu={() => toggleSubMenu("services")}
            menuItems={[
              { name: "Consultations", url: "/consultations" },
              { name: "Surgical Procedures", url: "/consultations" },
              { name: "Vaccination", url: "/vaccinations" },
              { name: "Wellness", url: "/wellness" },
              // "Dental Care", in wellness
              // "Deworming", in wellness
              { name: "Special Packages", url: "/packages" },
              { name: "Prices", url: "/prices" },
            ]}
            menuName={"isServicesMenuOpen"}
          />
          <NavigationButtonWithMenu
            title={"ONLINE APPOINTMENTS"}
            isMenuOpen={activeMenu === "onlineAppointment"}
            toggleMenu={() => toggleSubMenu("onlineAppointment")}
            menuItems={[
              { name: "Online Appointment Form", url: "/appointment" },
            ]}
          />
          <NavigationButtonWithMenu
            title={"ADOPTIONS"}
            isMenuOpen={activeMenu === "adoption"}
            toggleMenu={() => toggleSubMenu("adoption")}
            menuItems={[
              { name: "Animals Available for Adoption", url: "/adoptions" },
              { name: "Consultations for Adopted Animals", url: "" },
              { name: "Donations for abandoned animals", url: "" },
              { name: "Blog and Tips for Adopters", url: "" },
            ]}
          />

          <NavigationButtonWithMenu
            title={"PETSHOP"}
            isMenuOpen={activeMenu === "eShop"}
            toggleMenu={() => toggleSubMenu("eShop")}
            menuItems={[
              { name: "Pet Food", url: "/petshop" },
              { name: "Toys", url: "" },
            ]}
          />
          <NavigationButtonWithMenu
            title={"EVENTS CALENDAR"}
            isMenuOpen={activeMenu === "events"}
            toggleMenu={() => toggleSubMenu("events")}
            menuItems={[
              { name: "Special Events", url: "" },
              { name: "Free Campaigns", url: "" },
            ]}
          />

          <NavigationButtonWithMenu
            title={"UPDATES & COMMUNICATIONS"}
            isMenuOpen={activeMenu === "updates"}
            toggleMenu={() => toggleSubMenu("updates")}
            menuItems={[
              { name: "Shared  Newsletter", url: "" },
              { name: "Feedback and Reviews", url: "" },
            ]}
          />
          <NavigationButtonWithMenu
            title={"FAQ"}
            isMenuOpen={activeMenu === "FAQ"}
            toggleMenu={() => toggleSubMenu("FAQ")}
            menuItems={[{ name: "FAQ", url: "/faq" }]}
          />
          <Button
            className="md:hidden p-2 font-cromisom hover:scale-110 cursor-pointer text-white text-sm"
            onClick={toggleSignIn}
          >
            SIGN IN
          </Button>
        </div>
      )}
      <div>{children}</div>
    </>
  );
};

NavigationLayout.propTypes = {
  children: PropTypes.object,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};
