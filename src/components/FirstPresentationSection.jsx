import PropTypes from "prop-types";

export const FirstPresentationSection = ({
  title,
  description,
  src,
  alt,
  children,
  dataAos,
}) => {
  return (
    <>
      <section
        className="bg-columbiaBlue flex flex-col lg:flex-row items-center justify-center gap-7 py-10 px-6 sm:px-12 md:px-24 lg:px-32 shadow-lg rounded-xl"
        data-aos={dataAos}
      >
        <img
          src={src}
          alt={alt}
          className="lg:mr-20 w-full object-cover h-48 sm:h-64 md:h-72 lg:h-96 rounded-full shadow-lg"
        />
        <div className="flex flex-col items-center justify-center gap-7">
          <h1 className="mt-20 text-2xl sm:text-3xl font-josefin font-semibold text-pennBlue drop-shadow-md">
            {title}
          </h1>
          <p className="text-center font-josefin w-full text-gray-800 text-xl drop-shadow-md">
            {description}
          </p>
          {children}
        </div>
      </section>
    </>
  );
};

FirstPresentationSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.obj,
  dataAos: PropTypes.string,
};
