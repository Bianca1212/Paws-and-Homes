import PropTypes from "prop-types";

export const SubnavigationButton = ({ children }) => {
  return (
    <>
      <button className="text-sm font-merriWeather whitespace-nowrap transform transition-all duration-300 ease-in-out hover:scale-105">
        {children}
      </button>
    </>
  );
};

SubnavigationButton.propTypes = {
  children: PropTypes.object,
};
