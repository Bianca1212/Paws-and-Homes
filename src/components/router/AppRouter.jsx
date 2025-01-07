import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../../pages/home/HomePage";
import { AdoptionPage } from "../../pages/adoption/AdoptionPage";
import { ContactPage } from "../../pages/about/ContactPage";
import { MissionAndValues } from "../../pages/about/MissionAndValues";
import { AppointmentForm } from "../../pages/appointment/AppointmentForm";
import { FAQPage } from "../../pages/faq/FAQPage";
import { PetShop } from "../../pages/petshop/PetShop";

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
    { path: "/petshop", element: <PetShop /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
