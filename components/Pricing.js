import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-teagreen-400 w-full py-[7rem]" id="pricing">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 lg:pt-[2rem] pt-[6rem] mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-umber-500 leading-relaxed"
            >
              Convenient Disposal Options
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-chamoisee-500"
            >
              "Select the Perfect Package and Dive into Hassle-Free Recycling
              with a Smile!"
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-umber-500 rounded-xl py-4 lg:w-[60%] w-[100%] px-6 lg:px-12 xl:px-20 bg-olivine-400"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Free.png"
                    width={145}
                    height={165}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-lg text-umber-600 font-medium capitalize my-2 sm:my-7">
                  Drop Off
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-chamoisee-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Immediate Disposal
                  </li>
                  <li className="relative check custom-list my-2">
                    No Wait Time
                  </li>
                  <li className="relative check custom-list my-2">
                    Transparancy
                  </li>
                  <li className="relative check custom-list my-2">
                    Community Engagement
                  </li>
                  <li className="relative check custom-list my-2">
                    Immediate Reward
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-umber-600 text-center mb-4 ">
                    Free
                  </p>
                  <a href="/rewards">
                    <ButtonOutline>Select</ButtonOutline>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-umber-500 rounded-xl lg:w-[60%] w-[100%] py-4 px-6 lg:px-12 xl:px-20  bg-olivine-400"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Standard.png"
                    width={145}
                    height={165}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-umber-600 font-medium capitalize my-2 sm:my-7">
                  Pick Up{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-chamoisee-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Convenience
                  </li>
                  <li className="relative check custom-list my-2">
                    Accessibility
                  </li>
                  <li className="relative check custom-list my-2">
                    Safe Handling
                  </li>
                  <li className="relative check custom-list my-2">
                    Volume Handling
                  </li>
                  <li className="relative check custom-list my-2">
                    Flexible Scheduling{" "}
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-umber-600 text-center mb-4 ">
                    ₹10 <span className="text-umber-600">/ km</span>
                  </p>
                  <a href="/rewards">
                    <ButtonOutline>Select</ButtonOutline>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-umber-500 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              <span className="text-olivine-800">E-Waste</span> Facilites{" "}
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12 text-umber-500"
              variants={scrollAnimation}
            >
              Spot E-Waste Facilities Everywhere You Go. We're Here to Simplify
              Responsible Disposal, No Matter Where You Are!
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-16"
              variants={scrollAnimation}
            >
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
              variants={scrollAnimation}
            >
              {/* <Netflix className="h-18 w-auto" /> */}
              <img
                src="/assets/Icon/wno.png"
                className="h-[3rem] w-20 mt-4 lg:mt-2 mb-3"
                alt=""
              />
              <img
                src="/assets/Icon/sri.png"
                className="h-14 w-auto mt-2 lg:mt-0 mb-3"
                alt=""
              />
              <img
                src="/assets/Icon/ncer.png"
                className="h-12 w-auto mt-2 lg:mt-0 mb-3"
                alt=""
              />
              <img
                src="/assets/Icon/gec.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/es.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-umber-500 leading-normal w-9/12 w-[17rem] lg:w-7/12 mx-auto pt-[7rem]"
            >
              Trusted by Thousands of Responsible{" "}
              <span className="text-olivine-800">E-Waste</span> Contributors{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-9/12 pt-3 text-chamoisee-500"
            >
              These Are the Stories of Our E-Waste Heroes Embracing the Exciting
              Features We Offer with Enthusiasm!
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-olivine-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-umber-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br />{" "}
                    <strong className="text-olivine-800">E-Newsletters!</strong>
                  </h5>
                  <p className="text-chamoisee-500">
                    Subscribe and Uncover the Excitement of Daily E-Waste
                    Education!.
                  </p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
