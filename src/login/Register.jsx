import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import axios from "axios";
import { NavigationLayout } from "../layouts/NavigationLayout";
import { FormInput } from "../components/FormInput";
import { Button } from "../components/Button";
import { useState } from "react";

export const Register = () => {
  const [errors, setErrors] = useState([]);
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    age: "",
    password: "",
    verifyPassword: "",
  });

  const navigate = useNavigate();

  const validateRegister = () => {
    const newErrors = {};

    if (!values.name) {
      newErrors.name = "Name is required";
    }

    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!values.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(values.age) || values.age <= 0) {
      newErrors.age = "Please enter a valid age";
    }

    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password !== values.verifyPassword) {
      newErrors.verifyPassword = "Password do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registerErrors = validateRegister();
    if (registerErrors && Object.keys(registerErrors).length > 0) {
      // Object.keys(formErrors) este o metodă care returnează un array conținând toate cheile din obiectul formErrors
      setErrors(registerErrors);
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/users`, values);
      console.log(response);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <NavigationLayout>
        <h1 className="text-2xl font-bold font-merriWeather text-center pt-5 text-pennBlue">
          Register to Paws&Homes Veterinary Clinic
        </h1>
        <form className="flex flex-col gap-5 w-3/12 m-auto mt-4 p-3 rounded-md flex flex-col items-center justify-center">
          <FormInput
            name={"name"}
            type={"name"}
            placeholder={"Username"}
            value={values.name}
            onChange={handleChange}
            className="font-merriWeather w-80 h-10 sm:w-96 sm:h-14 p-4 cursor-pointer border-2 border-gray-500 border-midnightGreen text-center rounded-md placeholder:text-midnightGreen transform transition-all duration-300 ease-in-out hover:scale-105"
            error={errors.name}
          />
          <FormInput
            name={"email"}
            type={"email"}
            placeholder={"Email address"}
            value={values.email}
            onChange={handleChange}
            className="font-merriWeather w-80 h-10 sm:w-96 sm:h-14 p-4 cursor-pointer border-2 border-gray-500 border-midnightGreen text-center rounded-md placeholder:text-midnightGreen transform transition-all duration-300 ease-in-out hover:scale-105"
            error={errors.email}
          />
          <FormInput
            name={"age"}
            type={"number"}
            placeholder={"Age"}
            value={values.age}
            onChange={handleChange}
            className="font-merriWeather w-80 h-10 sm:w-96 sm:h-14 p-4 cursor-pointer border-2 border-gray-500 border-midnightGreen text-center rounded-md placeholder:text-midnightGreen transform transition-all duration-300 ease-in-out hover:scale-105"
            error={errors.age}
          />
          <FormInput
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            value={values.password}
            onChange={handleChange}
            className="font-merriWeather w-80 h-10 sm:w-96 sm:h-14 p-4 cursor-pointer border-2 border-gray-500 border-midnightGreen text-center rounded-md placeholder:text-midnightGreen transform transition-all duration-300 ease-in-out hover:scale-105"
            error={errors.password}
          />
          <FormInput
            name={"verifyPassword"}
            type={"password"}
            placeholder={"Rewrite password"}
            value={values.verifyPassword}
            onChange={handleChange}
            className="font-merriWeather w-80 h-10 sm:w-96 sm:h-14 p-4 cursor-pointer border-2 border-gray-500 border-midnightGreen text-center rounded-md placeholder:text-midnightGreen transform transition-all duration-300 ease-in-out hover:scale-105"
            error={errors.verifyPassword}
          />
          <Button
            onClick={handleSubmit}
            className="bg-midnightGreen text-white py-2 px-4 rounded mt-4 font-merriWeather transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            Sign In
          </Button>
        </form>
      </NavigationLayout>
    </>
  );
};
