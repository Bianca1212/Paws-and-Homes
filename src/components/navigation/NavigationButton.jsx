import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NavigationButton = ({ title, path }) => {
  return (
    <>
      <Link
        to={path}
        className="p-2 font-merriWeather font-semibold transform transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer text-white text-sm"
      >
        {title}
      </Link>
    </>
  );
};

export default NavigationButton;

NavigationButton.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
};
