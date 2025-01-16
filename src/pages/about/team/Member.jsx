import PropTypes from "prop-types";
import { useState } from "react";

export const Member = ({ name, images, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageChanging, setIsImageChanging] = useState(false);

  const validImages = Array.isArray(images) ? images : [];

  if (validImages.length === 0) {
    return (
      <div className="border rounded-lg shadow-lg flex flex-col items-center p-4 bg-blue-100 text-center">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-gray-600 mt-2 mx-5">No images available.</p>
        <p className="text-gray-600 mt-2 mx-5">{description}</p>
      </div>
    );
  }

  const handleImageClick = () => {
    setIsImageChanging(true);

    setTimeout(() => {
      setCurrentImageIndex(
        (prevImageIndex) => (prevImageIndex + 1) % images.length
      );
      setIsImageChanging(false);
    }, 700);
  };
  return (
    <>
      <div className="border-2 border-gray-200 rounded-lg shadow-lg flex flex-col items-center p-3 bg-blue-100 text-center">
        <h1 className="text-xl font-semibold text-gray-900">{name}</h1>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={images[currentImageIndex]}
            alt={name}
            onClick={handleImageClick}
            className={`w-29 h-72 cursor-pointer object-cover my-4 transition-all duration-1000 ease-in-out ${
              isImageChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          />
          <p className="text-gray-800 mt-2 mx-5 max-w-md break-words">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

Member.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
  description: PropTypes.string,
};
