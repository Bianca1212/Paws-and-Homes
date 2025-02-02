import PropTypes from "prop-types";
import { useState } from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/BreadCrumbs";
import { Navigation } from "../components/navigation/Navigation";
import { useAuth } from "../context/AuthContext";

export const NavigationLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="sticky top-0 z-50 bg-white w-full">
        <div className="relative flex justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center md:mx-5 mt-5 w-full">
            <Link to={"/home"}>
              <img
                src="./images/logo.jpg"
                alt="Logo"
                className="sm:max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl h-20 cursor-pointer"
              />
            </Link>

            <div className="flex flex-row gap-2 items-center justify-center w-full">
              <h1 className="font-merriWeather rounded-lg text-center sm:max-w-xs md:max-w-sm lg:w-25 text-lg md:text-xl lg:text-xl xl-text-2xl font-semibold">
                FIND ALL ABOUT OUR SERVICES
              </h1>
            </div>
            <div className="flex flex-row gap-5 py-5">
              {/* Hamburger button for mobile */}
              <Button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-2xl hover:scale-110"
              >
                {isMobileMenuOpen ? "X" : "☰"}
              </Button>

              <div className="w-25 md:w-30 flex flex-row mr-10 cursor-pointer bg-midnightGreen rounded-full p-2 transform transition-all duration-300 ease-in-out hover:scale-105 md:flex items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="30px"
                  width="30px"
                  className="text-white"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
                </svg>

                <ul>
                  {user ? (
                    <div className="font-semibold font-merriWeather text-white">
                      <Button
                        onClick={logout}
                        className="flex items-center gap-2 text-white px-4 py-2 rounded-full"
                      >
                        {user.email}
                      </Button>
                    </div>
                  ) : (
                    <li className="font-semibold font-merriWeather text-white text-sm">
                      <Link to="/login">LOGIN</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation for mobile (hamburger menu) */}
        <div
          className={`font-merriWeather bg-midnightGreen m-10 px-3 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <Navigation />
        </div>

        {/* Navigation for desktop */}
        <div className="font-merriWeather absolute top-22 left-0 right-0 p-3 gap-4 sm:gap-5 flex flex-col sm:flex-row justify-center z-40 bg-midnightGreen hidden md:flex">
          <Navigation />
        </div>
      </div>
      <Breadcrumbs />
      <div>{children}</div>
    </>
  );
};

NavigationLayout.propTypes = {
  children: PropTypes.array,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};
