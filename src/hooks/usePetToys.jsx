import axios from "axios";
import { useEffect, useState } from "react";

export const usePetToys = () => {
  const [petToys, setPetToys] = useState([]);

  const getPetToys = async () => {
    try {
      const response = await axios.get("http://localhost:3000/toys");
      setPetToys(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getPetToys();
  }, []);

  return { petToys };
};
