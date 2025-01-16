import PropTypes from "prop-types";

export const FormSelect = ({ name, value, onChange, children }) => {
  return (
    <>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-44 h-12 sm:w-74 sm:h-14 p-3 cursor-pointer border-2 border-gray-500 text-center rounded-md placeholder:text-gray-500 focus:outline-none text-base leading-normal"
      >
        {children}
      </select>
    </>
  );
};

FormSelect.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.object,
};
