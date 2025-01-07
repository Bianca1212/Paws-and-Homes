import PropTypes from "prop-types";

export const MissionAndValuesSection = ({ title, text, src, alt }) => {
  return (
    <>
      <section className="bg-white flex flex-row items-center justify-center gap-10 py-8 px-6 sm:px-12 md:px-24 lg:px-32 shadow-lg rounded-xl">
        <div className="flex flex-col items-center justify-center gap-7">
          <h1 className="mt-10 text-2xl sm:text-3xl font-josefin font-semibold drop-shadow-md text-gray-800">
            {title}
          </h1>
          <p
            className="text-center font-josefin w-full text-gray-800 text-lg drop-shadow-md"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
        <img
          src={src}
          alt={alt}
          className="mr-20 w-full object-cover h-48 sm:h-64 md:h-72 lg:h-80 rounded-md shadow-lg"
        />
      </section>
    </>
  );
};

MissionAndValuesSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.func,
};
