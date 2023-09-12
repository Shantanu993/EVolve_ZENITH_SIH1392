import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      answer:
        "E-Waste refers to discarded electronic devices, gadgets, and appliances that have reached the end of their useful life. Like Laptops, Smartphones, Printers, Kitchen Applicances etc",
      question: "What is E-waste?",
      // icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      answer:
        "Many electronic devices contain hazardous materials such as lead, mercury, and cadmium, which can leach into the soil and groundwater when left in landfills.",
      question: "The Environmental Toll",
      // icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      answer:
        "During e-waste recycling, electronic devices are collected, disassembled, and their components are sorted for material types.Then disposing and extraction is done.",
      question: "E-Waste Recycling Journey",
      // icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-teagreen-400">
      <div className="max-w-screen-xl mt-20 px-8 xl:px-16 mx-auto" id="about">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}
          >
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-umber-500 leading-normal">
                Find, Recycle, Renew. Your{" "}
                <strong className="text-olivine-600">E-WASTE SOLUTION</strong>.
              </h1>
              <p className="text-chamoisee-500 mt-4 mb-6">
                Connecting Communities for Sustainable E-Waste Collection and
                Easy Facility Discovery - Uncover Our Innovative Features Today!
              </p>
              <ButtonPrimary>

                <a href="/nearby">
                  Locate Nearby Facility
                </a>
              </ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/Illustration1.png"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <div className="relative w-full flex">
          <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-umber-500 bg-olivine-500 z-10">
            {listUser.map((listUsers, index) => (
              <motion.div
                className={`flex items-start sm:items-center sm:justify-center py-4 sm:py-6 w-full px-4 sm:w-auto mx-auto sm:mx-0 ${
                  index < 2 ? "mt-0" : "mt-2"
                }`}
                key={index}
                custom={{ duration: 2 + index }}
                variants={scrollAnimation}
              >
                <div className="flex w-full">
                  <div className="flex flex-col w-full">
                    <p className="text-xl text-umber-600 font-bold mb-1">
                      {listUsers.question}
                    </p>
                    <p className="text-lg text-umber-500 font-normal mb-0">
                      {listUsers.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollAnimationWrapper>

          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-2 sm:py-6 sm:divide-y-2 sm:divide-x-2 divide-umber-500 bg-olivine-500 z-10 justify-between">
            {listUser.map((listUsers, index) => (
              <motion.div
                className={`flex items-center justify-start sm:justify-center py-2 sm:py-4 w-full px-2 sm:w-auto mx-auto sm:mx-0 ${
                  index < 2 ? "mt-0" : "mt-2" // Adjusted the top margin for the first and second elements
                }`}
                key={index}
                custom={{ duration: 2 + index }}
                variants={scrollAnimation}
              >
                <div className="flex w-full">
                  <div className="flex flex-col w-full justify-between">
                    <p className="text-xl text-umber-600 font-bold mb-1">
                      {listUsers.question}
                    </p>
                    <p className="text-lg text-umber-500 font-normal mb-0">
                      {listUsers.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollAnimationWrapper> */
}
