import { useAuth } from "../../context/AuthContext";
import NavigationButton from "./NavigationButton";

export const Navigation = () => {
  const { user } = useAuth();

  return (
    <>
      <NavigationButton title={"OUR TEAM"} path="/team" />
      <NavigationButton title={"MISSION&VALUES"} path="/mission&values" />
      <NavigationButton title={"SERVICES"} path="/services" />
      {user && (
        <NavigationButton title={"ONLINE APPOINTMENT"} path="/appointment" />
      )}
      <NavigationButton title={"ADOPTIONS"} path="/adoptions" />
      <NavigationButton title={"PETSHOP"} path="/e-shop" />
      <NavigationButton title={"REVIEWS"} path="/reviews" />
      {user && <NavigationButton title={"CONTACT"} path="/contact" />}
      <NavigationButton title={"FAQ"} path="/faq" />
    </>
  );
};
