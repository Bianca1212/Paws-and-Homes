import PropTypes from "prop-types";
// import { useState } from "react";

export const FormInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
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
        className={className}
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
  className: PropTypes.string,
  error: PropTypes.string,
};
