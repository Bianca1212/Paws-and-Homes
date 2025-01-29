import { Button } from "../../components/Button";
import PropTypes from "prop-types";

export const PetShopSection = ({ title, src, alt, path }) => {
  return (
    <>
      <section className="border-2 border-gray-200 rounded-lg shadow-lg flex flex-col items-center p-10 bg-white text-center transform transition-all duration-300 ease-in-out hover:scale-105">
        <h1 className="text-xl text-center font-semibold">{title}</h1>
        <img src={src} alt={alt} className="w-29 h-72 object-cover my-4" />
        <Button
          path={path}
          className="text-white bg-pennBlue hover:bg-midnightGreen hover:text-white rounded-lg p-3 text-center transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          Discover more
        </Button>
      </section>
    </>
  );
};

PetShopSection.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  path: PropTypes.string,
};
