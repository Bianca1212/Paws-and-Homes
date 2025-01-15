import PropTypes from "prop-types";

export const SignInInput = ({ placeholder }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        className="sm:w-96 sm:h-14 p-4 cursor-pointer border-2 border-gray-500 border-lowesBlue text-center rounded-md placeholder:text-lowesBlue hover:bg-lowesBlue hover:text-white hover:placeholder:text-white hover:placeholder:font-bold focus:outline-none"
      />
    </>
  );
};

SignInInput.propTypes = {
  placeholder: PropTypes.string,
};
