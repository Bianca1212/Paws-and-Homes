import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PropTypes from "prop-types";

export const LoggedIn = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/home" replace={true} />;
  }

  return <>{children}</>;
};

LoggedIn.propTypes = {
  children: PropTypes.array,
};
