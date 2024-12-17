import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../../pages/home/HomePage";
import { AdoptionPage } from "../../pages/adoption/AdoptionPage";
import { ContactPage } from "../../pages/about/ContactPage";

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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
