import { PetShopSection } from "../../components/PetShopSection";
import { NavigationLayout } from "../../layouts/NavigationLayout";

export const PetShop = () => {
  return (
    <>
      <NavigationLayout>
        <div className="flex flex-col md:flex-row m-5 justify-center items-center mt-20 gap-10">
          <PetShopSection
            title={"Pet Food"}
            src={"/images/pet-food.jpg"}
            alt={"Pet Food"}
            path={"/food"}
          />
          <PetShopSection
            title={"Pet Toys and Accessories"}
            src={"/images/pet-toys.jpg"}
            alt={"Pet Toys"}
            path={"/toys"}
          />
        </div>
      </NavigationLayout>
    </>
  );
};
