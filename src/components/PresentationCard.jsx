import PropTypes from "prop-types";

export const PresentationCard = ({
  title,
  description,
  buttonName,
  children,
}) => {
  return (
    <>
      <div className="w-80 h-80 flex flex-col justify-center items-center mt-10 bg-white shadow-lg rounded-md border-2 border-gray-200 hover:border-2 hover:border-camel">
        {children}
        <h1 className="font-semibold font-josefin mt-2">{title}</h1>
        <p className=" font-josefin m-3 text-center">{description}</p>
        <button className="font-bold font-josefin bg-astrosNavy hover:bg-camel text-white hover:scale-110 p-2 rounded-lg">
          {buttonName}
        </button>
      </div>
    </>
  );
};

PresentationCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonName: PropTypes.string,
  children: PropTypes.object,
};
