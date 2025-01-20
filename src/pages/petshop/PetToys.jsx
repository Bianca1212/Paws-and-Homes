import { usePetToys } from "../../hooks/usePetToys";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import { Category } from "./Category";

export const PetToys = () => {
  const { petToys } = usePetToys();
  return (
    <>
      <NavigationLayout>
        <section className="mt-20 ml-20 flex flex-wrap items-center gap-8">
          {petToys.length > 0 ? (
            petToys.map((toy) => (
              <Category
                key={toy.id}
                name={toy.name}
                image={toy.image}
                price={toy.price}
                // description={toy.description}
              />
            ))
          ) : (
            <p className="text-center col-span-full">No food available.</p>
          )}
        </section>
      </NavigationLayout>
    </>
  );
};
