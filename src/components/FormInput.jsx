import PropTypes from "prop-types";

export const FormInput = ({ type, name, placeholder, value, onChange }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className=" w-44 h-8 sm:w-74 sm:h-14 p-3 cursor-pointer border-2 border-gray-500 text-center rounded-md placeholder:text-black focus:outline-none text-base leading-normal"
      />
    </>
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
