import PropTypes from "prop-types";

export const FirstMissionAndValuesSection = ({
  title,
  text,
  src,
  alt,
  dataAos,
  dataAosDelay,
}) => {
  return (
    <>
      <section
        className="font-merriWeather flex flex-col lg:flex-row items-center justify-center gap-10 py-8 px-6 sm:px-12 md:px-24 lg:px-32"
        data-aos={dataAos}
        data-aos-delay={dataAosDelay}
      >
        <div className="flex flex-col items-center justify-center gap-7">
          <h1 className="mt-10 text-2xl sm:text-3xl font-semibold drop-shadow-md text-gray-800">
            {title}
          </h1>
          <p className="text-center w-full text-gray-800 text-lg drop-shadow-md">
            {text}
          </p>
        </div>
        <img
          src={src}
          alt={alt}
          className="lg:mr-20 w-full object-cover h-48 sm:h-64 md:h-72 lg:h-80 rounded-md shadow-lg"
        />
      </section>
    </>
  );
};

FirstMissionAndValuesSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.func,
  dataAos: PropTypes.string,
  dataAosDelay: PropTypes.string,
};
