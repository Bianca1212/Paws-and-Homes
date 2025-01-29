import PropTypes from "prop-types";

export const FormInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="font-merriWeather w-80 h-10 sm:w-96 sm:h-14 p-4 cursor-pointer border-2 border-gray-500 border-midnightGreen text-center rounded-md placeholder:text-midnightGreen transform transition-all duration-300 ease-in-out hover:scale-105"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};
