import PropTypes from "prop-types";
import { useState } from "react";

export const Member = ({ name, images, description, services }) => {
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
      <div className="font-merriWeather border-2 border-gray-200 rounded-lg shadow-lg flex flex-row gap-20 items-center justify-around p-3 bg-beige text-center">
        <section className=" flex flex-col ">
          <h1 className="text-xl font-semibold text-gray-900">{name}</h1>
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
        </section>
        {/* <section className="flex flex-col items-start">
          <h2 className="text-lg font-semibold mt-4">Services:</h2>
          <ul className="list-disc pl-6 mt-2">
            {services &&
              services.map((service, index) => (
                <li key={index} className="text-gray-700">
                  <strong>{service.name}</strong>
                  {service.conditions && (
                    <ul className="pl-4">
                      {service.conditions.map((condition, subIndex) => (
                        <li key={subIndex}>{condition}</li>
                      ))}
                    </ul>
                  )}
                  {service.description && (
                    <p className="mt-2">{service.description}</p>
                  )}
                  {service.methods && (
                    <ul className="pl-4 mt-2">
                      {service.methods.map((method, methodIndex) => (
                        <li key={methodIndex}>{method}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </section> */}
      </div>
    </>
  );
};

Member.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
  description: PropTypes.string,
  services: PropTypes.array,
};
