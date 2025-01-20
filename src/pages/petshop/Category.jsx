import PropTypes from "prop-types";

export const Category = ({ name, price, image }) => {
  // const splitName = (name) => {
  //   const words = name.split(" ");
  //   const firstPart = words.slice(0, 5).join(" "); // primele 5 cuvinte
  //   const secondPart = words.slice(5).join(" "); // restul cuvintelor
  //   return { firstPart, secondPart };
  // };

  return (
    <>
      <div className="border-2 border-gray-200 rounded-lg shadow-lg flex flex-col items-center p-8 text-center h-96 w-64 hover:scale-110">
        <h1 className="text-lg font-semibold text-gray-900">{name}</h1>
        <img src={image} alt={name} className="w-48 h-48 object-cover my-4" />
        {/* <p className="text-sm text-gray-700 overflow-hidden text-ellipsis">
          {description}
        </p> */}
        <p className="font-bold text-gray-900">{price} $</p>
      </div>
    </>
  );
};

Category.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  // description: PropTypes.string,
  image: PropTypes.string,
};
