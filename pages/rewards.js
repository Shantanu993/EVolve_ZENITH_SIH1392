import Header from "@/components/redirectnav";
import Footer from "@/components/Layout/Footer.js";
import ApplianceForm from "@/components/ApplianceForm";
import PickupDropoffForm from "@/components/PickupDropoffForm";

const rewards = () => {
  return (
    <>
      <Header />
      <div className="bg-teagreen-400">
        <ApplianceForm />
      </div>
      <Footer />
    </>
  );
};

export default rewards;
