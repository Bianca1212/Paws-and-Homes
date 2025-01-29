import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { AdoptionPage } from "../../pages/AdoptionPage";
import { ContactPage } from "../../pages/contact/ContactPage";
import { MissionAndValues } from "../../pages/missionAndValues/MissionAndValues";
import { AppointmentForm } from "../../pages/appointment/AppointmentForm";
import { FAQPage } from "../../pages/faq/FAQPage";
import { PetShop } from "../../pages/petshop/PetShop";
import { Team } from "../../pages/team/Team";
import { PetFood } from "../../pages/petshop/PetFood";
import { PetToys } from "../../pages/petshop/PetToys";
import { LoggedIn } from "../../login/LoggedIn";
import { Register } from "../../login/Register";
import { ProtectedRoute } from "../../login/ProtectedRoute";
import { LoginSection } from "../../login/LoginSection";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <LoggedIn>
          <LoginSection />
        </LoggedIn>
      ),
    },
    {
      path: "/register",
      element: (
        <LoggedIn>
          <Register />
        </LoggedIn>
      ),
    },

    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/adoptions",
      element: <AdoptionPage />,
    },

    {
      path: "/contact",
      element: (
        <ProtectedRoute>
          <ContactPage />
        </ProtectedRoute>
      ),
    },
    { path: "/mission&values", element: <MissionAndValues /> },

    {
      path: "/appointment",
      element: (
        <ProtectedRoute>
          <AppointmentForm />
        </ProtectedRoute>
      ),
    },
    { path: "/faq", element: <FAQPage /> },
    { path: "/e-shop", element: <PetShop /> },
    { path: "/e-shop/food", element: <PetFood /> },
    { path: "/e-shop/toys", element: <PetToys /> },
    { path: "/team", element: <Team /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
