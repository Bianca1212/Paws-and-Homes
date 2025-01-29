import { useState } from "react";
import { usePetFood } from "../../hooks/usePetFood";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import { Category } from "./Category";
import { FooterLayout } from "../../layouts/FooterLayout";

export const PetFood = () => {
  const { petFood } = usePetFood();
  const [selectedAnimalTypes, setSelectedAnimalTypes] = useState({
    Dog: false,
    Cat: false,
    Rodents: false,
  });

  // Funcție pentru a gestiona schimbările de la checkbox
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedAnimalTypes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Funcție pentru a filtra pe baza checkbox-urilor selectate
  const filteredAnimalTypes = () => {
    const selectedTypes = Object.keys(selectedAnimalTypes).filter(
      (key) => selectedAnimalTypes[key]
    );

    if (selectedTypes.length === 0) {
      return petFood; // Dacă nu este selectată nicio categorie, returnează toate produsele
    }

    return petFood.filter((food) => selectedTypes.includes(food.animalType));
  };

  return (
    <NavigationLayout>
      <div className="flex flex-col items-center justify-center gap-5 my-20">
        <label
          htmlFor="meal-type"
          className="block text-lg font-medium font-facultyGlyphic text-gray-800 mb-2"
        >
          Select categories
        </label>

        {/* Checkbox-uri pentru fiecare tip de animal */}
        <div className="flex gap-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="Dog"
              name="Dog"
              checked={selectedAnimalTypes.Dog}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="Dog" className="text-sm text-gray-700">
              Dog
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="Cat"
              name="Cat"
              checked={selectedAnimalTypes.Cat}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="Cat" className="text-sm text-gray-700">
              Cat
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="Rodents"
              name="Rodents"
              checked={selectedAnimalTypes.Rodents}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="Rodents" className="text-sm text-gray-700">
              Rodents
            </label>
          </div>
        </div>
      </div>

      {/* Afișează lista de produse filtrată */}
      <section className="ml-20 flex flex-wrap items-center gap-8">
        {filteredAnimalTypes().length > 0 ? (
          filteredAnimalTypes().map((food) => (
            <Category
              key={food.id}
              name={food.name}
              image={food.image}
              price={food.price}
              description={food.description}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No food available.</p>
        )}
      </section>
      <FooterLayout />
    </NavigationLayout>
  );
};
