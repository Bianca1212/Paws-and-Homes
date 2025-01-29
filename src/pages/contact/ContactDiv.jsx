import PropTypes from "prop-types";

export const ContactDiv = ({ children }) => {
  return (
    <>
      <div className="flex flex-col items-center font-merriWeather">
        {children}
      </div>
    </>
  );
};

ContactDiv.propTypes = {
  children: PropTypes.object,
};
