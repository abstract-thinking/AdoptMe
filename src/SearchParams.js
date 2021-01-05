import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown.js";

const SearchParams = () => {
  // const location will change because not handle of user input happens
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS);
  const [breed, BreadDropdown, setBreed] = useDropdown("Breed", "", breeds);

  // After the render is done
  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreadDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
