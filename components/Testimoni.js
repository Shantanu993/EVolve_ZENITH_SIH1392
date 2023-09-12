import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Aryan Kumawat",
      image: "/assets/people-1.png",
      city: "Rajasthan",
      country: "India",
      rating: "4.5",
      testimoni:
        "Wow... I'm thrilled with this E-Waste Solution! It has exceeded my expectations, and I've encountered no issues so far. 'Green Volt' always delivers the best!",
    },
    {
      name: "Rhythm Gupta",
      image: "/assets/people-3.png",
      city: "Jammu & Kashmir",
      country: "India",
      rating: "4.5",
      testimoni:
        "I've tried several e-waste platforms, but Green Volt is a game-changer. The convenience, educational content, and the overall experience have been fantastic. Highly recommended!",
    },
    {
      name: "Kanishka S",
      image: "/assets/people-2.png",
      city: "Lucknow",
      country: "India",
      rating: "4.5",
      testimoni:
        "Kudos to Green Volt for making e-waste disposal so easy and engaging. The rewards system is a brilliant idea, and I've learned so much about the importance of responsible recycling",
    },
    {
      name: "Dhruv Rawat",
      image: "/assets/people-3.png",
      city: "Uttrakhand",
      country: "India",
      rating: "4.5",
      testimoni:
        "I've recommended Green Volt to all my friends and family. It's not just a disposal service; it's an educational platform that's changing the way we handle e-waste. I'm a fan!",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all"></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-umber-500 hover:border-parchment-800 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-umber-600 font-medium capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-olivine-800 font-normal capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm text-olivine-800 font-bold">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left text-umber-500 font-normal">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-transparent border-umber-500 border hover:bg-umber-500 hover:text-white-500 transition-all text-olivine-800 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-transparent border-umber-500 border hover:bg-umber-500 hover:text-white-500 transition-all text-olivine-800 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
