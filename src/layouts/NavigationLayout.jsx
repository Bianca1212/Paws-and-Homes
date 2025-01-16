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
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center md:mx-5 mt-5 w-full">
          <img
            src="./images/logo.jpg"
            alt="Logo"
            className="sm:max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl h-20 cursor-pointer"
          />
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <h1 className="font-josefin rounded-lg text-center sm:max-w-xs md:max-w-sm lg:w-25 text-lg md:text-xl lg:text-xl xl-text-2xl cursor-pointer font-bold">
              FIND ALL ABOUT OUR SERVICES
            </h1>
            <Button
              onClick={toggleMenu}
              className="cursor-pointer hover:scale-110 text-lg"
            >
              {isMenuOpen ? <FaSortUp /> : <FaSortDown />}
            </Button>
          </div>
          <div className="flex flex-row gap-5">
            <Link to={"/home"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35px"
                height="35px"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  clipRule="evenodd"
                  d="M16.3382 1.94393L25.9705 9.82424L26.0201 9.8788C26.1701 10.0437 26.3998 10.3064 26.5943 10.6198C26.7798 10.9189 27 11.3686 27 11.8956V24.9976C27 26.1013 26.1068 27 25 27H18.7601C17.9317 27 17.2601 26.3284 17.2601 25.5V20.7939C17.2601 18.9948 15.8058 17.5405 14.0168 17.5405C12.2279 17.5405 10.7735 18.9948 10.7735 20.7939V25.5C10.7735 26.3284 10.102 27 9.27354 27H3C1.89318 27 1 26.1013 1 24.9976V11.7425C1 11.0901 1.36299 10.564 1.56986 10.3028C1.69049 10.1505 1.80873 10.0264 1.89631 9.94036C1.9407 9.89677 1.97877 9.86147 2.0074 9.83565C2.02175 9.8227 2.03384 9.81204 2.0433 9.80382L2.05551 9.79329L2.06007 9.7894L2.06278 9.7871C2.06278 9.7871 2.06356 9.78646 2.7075 10.5515L2.06356 9.78646L2.07352 9.77807L11.6288 1.94617C12.9452 0.685478 15.0206 0.684487 16.3382 1.94393ZM3.35246 11.3159L3.3468 11.3209C3.33673 11.33 3.31953 11.3459 3.29759 11.3674C3.25251 11.4117 3.19388 11.4736 3.13764 11.5446C3.07966 11.6178 3.038 11.6834 3.01374 11.7344C3.00661 11.7494 3.00238 11.7602 3 11.767V24.9976L3.00006 24.9992L3.0007 25H8.77354V20.7939C8.77354 17.8948 11.1188 15.5405 14.0168 15.5405C16.9149 15.5405 19.2601 17.8948 19.2601 20.7939V25H24.9993L24.9999 24.9992L25 24.9976V11.8956C25 11.8989 25.0008 11.8992 25 11.8956C24.9966 11.8812 24.9788 11.8095 24.8948 11.6742C24.8108 11.5389 24.7005 11.4037 24.588 11.2772L15.004 3.43645L14.9714 3.40439C14.4228 2.86484 13.5451 2.86525 12.997 3.40534L12.9644 3.43744L3.35246 11.3159Z"
                  fill="#71797E"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
            <div className="flex flex-row gap-2 mr-10 cursor-pointer bg-lowesBlue p-2 rounded-full hover:scale-110 hidden md:flex md:items-center">
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
        <div className="m-0 absolute top-22 left-0 right-0 p-3 gap-4 sm:gap-5 flex flex-col sm:flex-row justify-center z-40 bg-lowesBlue">
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
            menuItems={[{ name: "E-Shop", url: "/e-shop" }]}
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
            className="md:hidden p-2 font-josefin hover:scale-110 cursor-pointer text-white text-sm text-center"
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
