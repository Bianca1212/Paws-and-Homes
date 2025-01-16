import axios from "axios";
import { useEffect, useState } from "react";

export const usePetFood = () => {
  const [petFood, setPetFood] = useState([]);

  const getPetFood = async () => {
    try {
      const response = await axios.get("http://localhost:3000/petFood");
      setPetFood(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getPetFood();
  }, []);

  return { petFood };
};
