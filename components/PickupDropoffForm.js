import { useState } from "react";
import { useRouter } from "next/router";

const PickupDropoffForm = () => {
  const [pickup, setPickup] = useState(false);
  const [dropoff, setDropoff] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter(); // Add this line to get the router instance

  const handlePickupToggle = () => {
    setPickup(true);
    setDropoff(false);
  };

  const handleDropoffToggle = () => {
    setDropoff(true);
    setPickup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Redirect to home page after submission
    router.push("/");
  };

  return (
    <div className="container mx-auto py-4 h-[100vh]">
      <div className="flex justify-center">
        <button
          className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            pickup ? "bg-blue-700" : ""
          }`}
          onClick={handlePickupToggle}
        >
          Schedule Pickup
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            dropoff ? "bg-blue-700" : ""
          }`}
          onClick={handleDropoffToggle}
        >
          Schedule Dropoff
        </button>
      </div>
      {pickup && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pickup Address
            </label>
            <input
              className="w-full border rounded px-3 py-2"
              type="text"
              name="pickupAddress"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pickup Date
            </label>
            <input
              className="w-full border rounded px-3 py-2"
              type="date"
              name="pickupDate"
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Schedule Pickup
            </button>
          </div>
        </form>
      )}
      {dropoff && (
        <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Dropoff Address
            </label>
            <input
              className="w-full border rounded px-3 py-2"
              type="text"
              name="dropoffAddress"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Dropoff Date
            </label>
            <input
              className="w-full border rounded px-3 py-2"
              type="date"
              name="dropoffDate"
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              Schedule Dropoff
            </button>
          </div>
        </form>
      )}
      {formSubmitted && (
        <div className="text-green-600 text-center mt-4">
          Pickup successfully scheduled!
        </div>
      )}
    </div>
  );
};

export default PickupDropoffForm;
