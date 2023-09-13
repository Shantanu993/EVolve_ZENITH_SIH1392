import React, { useState } from "react";
import ApplianceForm from "./ApplianceForm";
import PickupDropoffForm from "./PickupDropoffForm";

const MainForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div>
      {!formSubmitted ? (
        <ApplianceForm onFormSubmit={handleFormSubmit} />
      ) : (
        <PickupDropoffForm />
      )}
    </div>
  );
};

export default MainForm;
