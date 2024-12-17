import axios from "axios";
import { useRef } from "react";

export const usePets = () => {
  const petNameRef = useRef("");
  const petSexRef = useRef("");
  const petBreedRef = useRef("");
  const petAgeRef = useRef("");
  const petSizeRef = useRef("");
  const petColorRef = useRef("");
  const arrivalDateRef = useRef("");
  const knownDiseasesRef = useRef("");

  const addCat = async () => {
    try {
      await axios.post(`http://localhost:3000/pets/cats`, {
        petName: petNameRef.current.value,
        petSex: petSexRef.current.value,
        petBreed: petBreedRef.current.value,
        petAge: petAgeRef.current.value.split("\n"),
        petSize: petSizeRef.current.value.split("\n"),
        petColor: petColorRef.current.value.split("\n"),
        arrivalDate: arrivalDateRef.current.value,
        knownDiseases: knownDiseasesRef.current.value,
      });

      petNameRef.current.value = "";
      petSexRef.current.value = "";
      petAgeRef.current.value = "";
      petSizeRef.current.value = "";
      petColorRef.current.value = "";
      arrivalDateRef.current.value = "";
      knownDiseasesRef.current.value = "";
    } catch (error) {
      alert("An error occurred while saving the pet. " + error.message);
    }
  };

  const addDog = async () => {
    try {
      await axios.post(`http://localhost:3000/pets/dogs`, {
        petName: petNameRef.current.value,
        petSex: petSexRef.current.value,
        petBreed: petBreedRef.current.value,
        petAge: petAgeRef.current.value.split("\n"),
        petSize: petSizeRef.current.value.split("\n"),
        petColor: petColorRef.current.value.split("\n"),
        arrivalDate: arrivalDateRef.current.value,
        knownDiseases: knownDiseasesRef.current.value,
      });

      petNameRef.current.value = "";
      petSexRef.current.value = "";
      petAgeRef.current.value = "";
      petSizeRef.current.value = "";
      petColorRef.current.value = "";
      arrivalDateRef.current.value = "";
      knownDiseasesRef.current.value = "";
    } catch (error) {
      alert("An error occurred while saving the pet. " + error.message);
    }
  };

  return {
    petNameRef,
    petSexRef,
    petAgeRef,
    petSizeRef,
    petColorRef,
    arrivalDateRef,
    knownDiseasesRef,
    addCat,
    addDog,
  };
};
