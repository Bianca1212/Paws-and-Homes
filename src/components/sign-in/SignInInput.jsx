import PropTypes from "prop-types";

export const SignInInput = ({ placeholder }) => {
  return (
    <>
      <input
        placeholder={placeholder}
        className="w-80 h-10 sm:w-96 sm:h-14 p-4 cursor-pointer border-2 border-gray-500 border-pennBlue text-center rounded-md placeholder:text-pennBlue hover:bg-pennBlue hover:text-white hover:placeholder:text-white hover:placeholder:font-bold focus:outline-none"
      />
    </>
  );
};

SignInInput.propTypes = {
  placeholder: PropTypes.string,
};
