import Header from "@/components/redirectnav";
import Footer from "@/components/Layout/Footer.js";
import ApplianceForm from "@/components/ApplianceForm";
import PickupDropoffForm from "@/components/PickupDropoffForm";

const rewards = () => {
  return (
    <>
      <Header />
      <ApplianceForm />
      <PickupDropoffForm />
      <Footer />
    </>
  );
};

export default rewards;
