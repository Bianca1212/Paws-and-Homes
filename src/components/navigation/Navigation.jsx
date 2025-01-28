import { useState } from "react";
import { NavigationButtonWithMenu } from "./NavigationButtonWithMenu";

export const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <>
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
          { name: "Special Packages", url: "/packages" },
          { name: "Prices", url: "/prices" },
        ]}
        menuName={"isServicesMenuOpen"}
      />
      <NavigationButtonWithMenu
        title={"ONLINE APPOINTMENTS"}
        isMenuOpen={activeMenu === "onlineAppointment"}
        toggleMenu={() => toggleSubMenu("onlineAppointment")}
        menuItems={[{ name: "Online Appointment Form", url: "/appointment" }]}
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
      {/* <Button
        className="md:hidden p-2 hover:scale-110 cursor-pointer text-white text-sm font-merriWeather"
        onClick={toggleSignIn}
      >
        SIGN IN
      </Button> */}
    </>
  );
};
