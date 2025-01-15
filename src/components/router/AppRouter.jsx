import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../../pages/home/HomePage";
import { AdoptionPage } from "../../pages/adoption/AdoptionPage";
import { ContactPage } from "../../pages/about/ContactPage";
import { MissionAndValues } from "../../pages/about/MissionAndValues";
import { AppointmentForm } from "../../pages/appointment/AppointmentForm";
import { FAQPage } from "../../pages/faq/FAQPage";
import { PetShop } from "../../pages/petshop/PetShop";
import { Team } from "../../pages/about/team/Team";
import { Gallery } from "../../pages/about/Gallery";
import { PetFood } from "../../pages/petshop/PetFood";
import { PetToys } from "../../pages/petshop/PetToys";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/adoptions",
      element: <AdoptionPage />,
    },
    { path: "/contact", element: <ContactPage /> },
    { path: "/mission&values", element: <MissionAndValues /> },
    { path: "/appointment", element: <AppointmentForm /> },
    { path: "/faq", element: <FAQPage /> },
    { path: "/e-shop", element: <PetShop /> },
    { path: "/food", element: <PetFood /> },
    { path: "/toys", element: <PetToys /> },
    { path: "/team", element: <Team /> },
    { path: "/gallery", element: <Gallery /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
