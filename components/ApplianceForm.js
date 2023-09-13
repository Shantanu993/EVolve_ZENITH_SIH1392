// components/ApplianceForm.js
import React from "react";

const ApplianceForm = () => {
  // Define your appliance, device, company, and year options here

  return (
    <div className="container mx-auto py-4 h-[100vh]">
      <form className="flex flex-row bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 gap-9 mt-[7rem]">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Appliance Type
          </label>
          <select
            className="w-full border rounded px-3 py-2"
            name="applianceType"
          >
            {/* Add your appliance type options here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Device Type
          </label>
          <select className="w-full border rounded px-3 py-2" name="deviceType">
            {/* Add your device type options here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Model/Company
          </label>
          <select
            className="w-full border rounded px-3 py-2"
            name="modelCompany"
          >
            {/* Add your model/company options here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Year of Manufacture
          </label>
          <select
            className="w-full border rounded px-3 py-2"
            name="yearOfManufacture"
          >
            {/* Add your year options here */}
          </select>
        </div>
        <div className="mb-6 text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplianceForm;
