import { useAuth } from "../../context/AuthContext";
import NavigationButton from "./NavigationButton";

export const Navigation = () => {
  const { user } = useAuth();

  return (
    <>
      <NavigationButton title={"OUR TEAM"} path="/team" />
      <NavigationButton title={"MISSION&VALUES"} path="/mission&values" />
      <NavigationButton title={"SERVICES"} path="/services" />
      <NavigationButton title={"ADOPTIONS"} path="/adoptions" />
      <NavigationButton title={"PETSHOP"} path="/e-shop" />
      <NavigationButton title={"REVIEWS"} path="/reviews" />
      <NavigationButton title={"FAQ"} path="/faq" />

      {user && (
        <>
          <NavigationButton title={"ONLINE APPOINTMENT"} path="/appointment" />
          <NavigationButton title={"CONTACT"} path="/contact" />
        </>
      )}
    </>
  );
};
