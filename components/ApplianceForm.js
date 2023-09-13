import React, { useState } from "react";
import PickupDropoffForm from "./PickupDropoffForm";

const ApplianceForm = () => {
  const applianceOptions = ["Small", "Medium", "Large"];
  const deviceOptions = {
    Small: [
      "Mobile",
      "Router",
      "DVD Players",
      "Tablets",
      "Earpods",
      "Cameras",
      "Earphones",
      "Lights",
    ],
    Medium: [
      "Toaster",
      "Laptops",
      "TVs",
      "Rice Cooker",
      "Induction Stove",
      "Fans",
      "Projector",
      "Home Speakers",
      "Juicer",
      "Grinders",
    ],
    Large: [
      "Fridge",
      "Washing Machine",
      "AC",
      "TV",
      "Coolers",
      "Dishwashers",
      "Ovens",
      "Photocopy Machines",
    ],
  };
  const companyOptions = {
    Mobile: ["Apple", "Samsung", "Google"],
    Router: ["Netgear", "Linksys", "TP-Link"],
    "DVD Players": ["Sony", "LG", "Panasonic"],
    Tablets: ["Apple", "Samsung"],
    Earpods: ["Apple"],
    Cameras: ["Nikon", "Canon", "Sony"],
    Earphones: ["Sony", "Bose", "JBL"],
    Lights: ["Philips", "Syska"],
    Toaster: ["Bajaj", "Philips", "Prestige"],
    Laptops: ["Apple", "HP", "Dell", "MSI"],
    TVs: ["Samsung", "Sony", "LG", "Panasonic"],
    "Rice Cooker": ["Panasonic", "Bajaj"],
    "Induction Stove": ["Prestige", "Bajaj", "Philips"],
    Fans: ["Bajaj", "Crompton", "Havells"],
    Projector: ["Sony", "Epson", "BenQ"],
    "Home Speakers": ["Sony", "JBL", "Bose"],
    Juicer: ["Philips", "Bajaj"],
    Grinders: ["Bajaj", "Philips", "Prestige"],
    Fridge: ["Samsung", "LG", "Whirlpool"],
    "Washing Machine": ["Samsung", "LG", "Whirlpool"],
    AC: ["Samsung", "LG", "Daikin"],
    Coolers: ["Symphony", "Crompton"],
    Dishwashers: ["LG", "Bosch"],
    Ovens: ["Samsung", "LG", "Bajaj"],
    "Photocopy Machines": ["Canon", "Xerox"],
  };

  const [selectedAppliance, setSelectedAppliance] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleApplianceChange = (e) => {
    setSelectedAppliance(e.target.value);
    setSelectedDevice("");
    setSelectedCompany("");
  };

  const handleDeviceChange = (e) => {
    setSelectedDevice(e.target.value);
    setSelectedCompany("");
  };

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="container mx-auto py-4 h-[100vh] ">
      <form
        className="flex flex-row bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 gap-9 mt-[7rem] bg-olivine-500"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Appliance Type
          </label>
          <select
            className="w-full border rounded px-3 py-2"
            name="applianceType"
            onChange={handleApplianceChange}
            value={selectedAppliance}
          >
            <option value="">Select</option>
            {applianceOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {selectedAppliance && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Device Type
            </label>
            <select
              className="w-full border rounded px-3 py-2"
              name="deviceType"
              onChange={handleDeviceChange}
              value={selectedDevice}
            >
              <option value="">Select</option>
              {deviceOptions[selectedAppliance].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        {selectedDevice && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Company
            </label>
            <select
              className="w-full border rounded px-3 py-2"
              name="company"
              onChange={handleCompanyChange}
              value={selectedCompany}
            >
              <option value="">Select</option>
              {companyOptions[selectedDevice].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        {selectedCompany && (
          <div className="mb-6 text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        )}
      </form>

      {formSubmitted && (
        <div className="text-green-600 text-center mt-4">
          <PickupDropoffForm />
        </div>
      )}
    </div>
  );
};

export default ApplianceForm;
