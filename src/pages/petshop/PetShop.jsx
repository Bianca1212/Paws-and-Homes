import { PetShopSection } from "../../pages/petshop/PetShopSection";
import { NavigationLayout } from "../../layouts/NavigationLayout";
import { FooterLayout } from "../../layouts/FooterLayout";

export const PetShop = () => {
  return (
    <>
      <NavigationLayout>
        <div className="flex flex-col md:flex-row m-5 justify-center items-center mt-20 gap-10">
          <PetShopSection
            title={"Pet Food"}
            src={"/images/pet-food.jpg"}
            alt={"Pet Food"}
            path={"/e-shop/food"}
          />
          <PetShopSection
            title={"Pet Toys and Accessories"}
            src={"/images/pet-toys.jpg"}
            alt={"Pet Toys"}
            path={"/e-shop/toys"}
          />
        </div>
        <FooterLayout />
      </NavigationLayout>
    </>
  );
};
