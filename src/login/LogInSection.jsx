import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import { NavigationLayout } from "../layouts/NavigationLayout";

export const LogInSection = () => {
  const [errors, setErrors] = useState([]);
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const validateLogin = () => {
    const newErrors = {};

    // Verifică dacă emailul este valid
    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email address is invalid";
    }

    // Verifică dacă parola este introdusă
    if (!values.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const { login } = useAuth();

  // Stare pentru a controla dacă modalul este deschis sau închis
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Functie pentru a închide modalul
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Functie pentru a trimite formularul
  const handleSubmit = (event) => {
    event.preventDefault();
    const loginErrors = validateLogin();
    if (loginErrors && Object.keys(loginErrors).length > 0) {
      // Object.keys(formErrors) este o metodă care returnează un array conținând toate cheile din obiectul formErrors
      setErrors(loginErrors);
      return;
    }

    login(values);
  };

  if (!isModalOpen) {
    return null; // Dacă modalul nu este deschis, nu se va mai renderiza componenta
  }

  return (
    <NavigationLayout>
      {/* Modal container */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white font-merriWeather object-cover p-6 rounded shadow-lg md:w-1/3 md:h-2/3 w-11/12 max-w-md relative border-box flex flex-col">
          {/* Buton de închidere a modalului */}
          <Button
            className="absolute top-2 right-2 text-lg"
            onClick={closeModal} // Închide modalul când este apăsat
          >
            &times;
          </Button>

          {/* Header-ul modalului */}
          <h1 className="text-center text-xl text-gray-800 font-sans font-semibold">
            Welcome to Paws & Homes
          </h1>
          <p className="text-center text-sm text-gray-600 font-sans">
            Sign in to save your favorite pets and access your account.
          </p>

          {/* Formularul de login */}
          <form
            className="flex flex-col gap-5 items-center justify-center my-5 p-10 mx-20 flex-grow"
            // onSubmit={handleSubmit}
          >
            <FormInput
              name="email"
              type="email"
              placeholder="User email"
              value={values.email}
              onChange={handleChange}
              error={errors.name}
            />
            <FormInput
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />

            {/* Butonul de submit */}
            <Button
              onClick={handleSubmit}
              className="bg-midnightGreen font-merriWeather text-white py-2 px-4 rounded mt-4 transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              Log In
            </Button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Don`t have an account yet?
              <Button
                path="/register"
                className="text-blue-500 hover:text-blue-700"
              >
                Click here to sign in
              </Button>
            </p>
          </form>
        </div>
      </div>
    </NavigationLayout>
  );
};
