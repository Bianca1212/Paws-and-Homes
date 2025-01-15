import { Button } from "./Button";
import PropTypes from "prop-types";

export const PetShopSection = ({ title, src, alt, path }) => {
  return (
    <>
      <section className="border-2 border-gray-200 rounded-lg shadow-lg flex flex-col items-center p-10 bg-white text-center">
        <h1 className="text-xl text-center font-semibold">{title}</h1>
        <img src={src} alt={alt} className="w-29 h-72 object-cover my-4" />
        <Button
          path={path}
          className="hover:border-2 hover:border-lowesBlue hover:text-lowesBlue hover:bg-white bg-lowesBlue rounded-lg text-white p-3 text-center"
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
