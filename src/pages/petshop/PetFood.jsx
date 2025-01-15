import { NavigationLayout } from "../../layouts/NavigationLayout";

export const PetFood = () => {
  return (
    <>
      <NavigationLayout>
        <div className="flex flex-row justify-center items-center mt-20 gap-6">
          <img
            src="./images/petshop-dog.jpg"
            alt="Dog"
            className="border border-gray-100 rounded-full w-32 h-34 object-cover my-4 transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <img
            src="./images/petshop-cat.jpg"
            alt="Cat"
            className="border border-gray-100 rounded-full w-32 h-34 object-cover my-4 transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <img
            src="./images/petshop-rabbit.jpg"
            alt="Rabbit"
            className="border border-gray-100 rounded-full w-32 h-34 object-cover my-4 transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <img
            src="./images/petshop-hamster.jpg"
            alt="Hamster"
            className="border border-gray-100 rounded-full w-32 h-34 object-cover my-4 transition-all duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </NavigationLayout>
    </>
  );
};
