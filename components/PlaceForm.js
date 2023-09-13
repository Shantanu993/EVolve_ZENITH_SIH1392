// components/PlaceForm.js

import { useState } from "react";

const PlaceForm = () => {
  const [selectedPlace, setSelectedPlace] = useState("");
  const places = ["Chennai", "Delhi", "Jaipur", "Chandigarh"];

  const handlePlaceChange = (e) => {
    setSelectedPlace(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    displayFacilities(selectedPlace);
  };

  const displayFacilities = (selectedPlace) => {
    console.log("Selected place:", selectedPlace);
  };

  return (
    <div className="w-[25rem] p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-umber-500 mb-4">Select Place</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="place"
            className="block text-chamoisee-600 font-medium"
          >
            Choose a Place:
          </label>
          <select
            id="place"
            name="place"
            value={selectedPlace}
            onChange={handlePlaceChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:border-umber-500 bg-olivine-500 text-umber-600 font-medium"
          >
            <option
              className="bg-transparent text-umber-500"
              value="Chennai"
              disabled
            >
              Select a place
            </option>
            {places.map((place, index) => (
              <option key={index} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="py-2 lg:py-2 px-10 lg:px-10 text-white-500 font-semibold rounded-lg bg-umber-500 hover:shadow-umber-md transition-all outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PlaceForm;
