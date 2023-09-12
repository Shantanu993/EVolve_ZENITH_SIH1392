import Header from "@/components/Layout/Header.js";
import Footer from "@/components/Layout/Footer.js";
import ButtonPrimary from "@/components/misc/ButtonPrimary";

const nearby = () => {
  return (
    <>
      <Header />
      <div className="bg-teagreen-500">
        <div className="max-w-screen-xl pt-[9rem] px-4 xl:px-[1rem] ml-4 h-[100vh]">
          <ButtonPrimary>
            <a href="/nearby">Locate Nearby Facility</a>
          </ButtonPrimary>
        </div>
      </div>
      ;
      <Footer />
    </>
  );
};

export default nearby;
