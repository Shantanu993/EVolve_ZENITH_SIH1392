import Head from "next/head";
import Header from "@/components/Layout/Header.js";
import Footer from "@/components/Layout/Footer.js";
import PlaceForm from "@/components/PlaceForm.js";
import MapEmbed from "@/components/MapEmbed";
import ButtonPrimary from "@/components/misc/ButtonPrimary";

const nearby = () => {
  return (
    <>
      <Header />
      <div className="bg-teagreen-400 w-full h-[100vh]">
        <div className="flex md:flex-row flex-col gap-[10rem] max-w-screen-xl pt-[13rem] pb-[12rem] px-4 xl:px-[1rem] md:ml-[6rem] h-[100vh]">
          {/* <ButtonPrimary>
            <a href="/nearby">Locate Nearby Facility</a>
          </ButtonPrimary> */}

          <div className="">
            <Head>
              <title>E-Waste Collector</title>
            </Head>
            <PlaceForm />
          </div>
          <div className="flex justify-center items-center">
            <MapEmbed />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default nearby;
