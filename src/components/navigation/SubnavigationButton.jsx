import PropTypes from "prop-types";

export const SubnavigationButton = ({ children }) => {
  return (
    <>
      <button className="text-sm font-cromisom whitespace-nowrap">
        {children}{" "}
      </button>
    </>
  );
};

SubnavigationButton.propTypes = {
  children: PropTypes.object,
};
