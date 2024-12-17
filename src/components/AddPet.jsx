import { NavigationLayout } from "../layouts/NavigationLayout";
import { usePets } from "../hooks/usePets";

export const AddPet = () => {
  const {
    petNameRef,
    petSexRef,
    petBreedRef,
    petAgeRef,
    petSizeRef,
    petColorRef,
    arrivalDateRef,
    knownDiseasesRef,
    addCat,
    addDog,
  } = usePets();

  const onSubmitCat = async (event) => {
    event.preventDefault();
    await addCat();
  };

  const onSubmitDog = async (event) => {
    event.preventDefault();
    await addDog();
  };

  return (
    <>
      <NavigationLayout>
        <div className="bg-[url('/images/form-bg.png')] bg-repeat bg-cover bg-center min-h-screen bg-fixed flex flex-col justify-center p-1">
          <h2 className="text-center text-3xl font-bold font-dancingScript mb-6">
            Add a New Recipe
          </h2>

          <h4 className="text-center font-semibold font-dancingScript text-2xl space-y-5 text-gray-700">
            Welcome to{" "}
            <span className="text-black font-bold">the Recipe Manager!</span>{" "}
            <br />
            We are excited to help you share your culinary creations with the
            world. <br />
            Use the form below to submit your new recipe.
          </h4>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col justify-center items-center bg-linen mx-auto my-10 p-5 gap-6 border rounded-lg shadow-lg w-full max-w-lg transform hover:scale-105 transition-all duration-300"
          >
            <label>Pet name</label>
            <input ref={petNameRef} type="text" />

            <label>Pet sex</label>
            <input ref={petSexRef} type="text" />

            <label>Pet breed</label>
            <input ref={petBreedRef} type="text" />

            <label>Pet age</label>
            <input ref={petAgeRef} type="number" />

            <label>Pet size</label>
            <input ref={petSizeRef} type="text" />

            <label>Pet color</label>
            <input ref={petColorRef} rows="text" />

            <label>Arrival date</label>
            <input ref={arrivalDateRef} type="date" />

            <label>Known diseases</label>
            <input ref={knownDiseasesRef} type="text" />

            <div className="flex gap-4">
              <button
                type="button" // Previne submit-ul formularului
                onClick={onSubmitCat}
                className="mt-4 px-6 py-2 bg-black text-white font-facultyGlyphic rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition duration-200"
              >
                Add Cat
              </button>

              <button
                type="button" // Previne submit-ul formularului
                onClick={onSubmitDog}
                className="mt-4 px-6 py-2 bg-black text-white font-facultyGlyphic rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition duration-200"
              >
                Add Dog
              </button>
            </div>
          </form>
        </div>
      </NavigationLayout>
    </>
  );
};
