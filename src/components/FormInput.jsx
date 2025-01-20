import PropTypes from "prop-types";
// import { useState } from "react";

export const FormInput = ({ type, name, placeholder, value, onChange }) => {
  // const [inputValue, setInputValue] = useState(value); // pentru a manipula valoarea inputului local

  // const handleFocus = () => {
  //   // Dacă valoarea este goală, înlătură placeholder-ul
  //   if (inputValue === placeholder) {
  //     setInputValue(""); // Curăță valoarea când câmpul primește focus
  //   }
  // };

  // const handleBlur = () => {
  //   // Dacă valoarea este goală, pune înapoi placeholder-ul
  //   if (inputValue === "") {
  //     setInputValue(placeholder);
  //   }
  // };

  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
        className=" w-44 h-8 sm:w-74 sm:h-14 p-3 cursor-pointer border-2 border-gray-500 text-center rounded-md placeholder:text-gray-500 text-base leading-normal"
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
  handleFocus: PropTypes.func,
};
