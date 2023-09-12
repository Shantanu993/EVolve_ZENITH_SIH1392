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
    <div className="max-w-md p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Select Place</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="place" className="block text-gray-600">
            Choose a Place:
          </label>
          <select
            id="place"
            name="place"
            value={selectedPlace}
            onChange={handlePlaceChange}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="" disabled>
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
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PlaceForm;
