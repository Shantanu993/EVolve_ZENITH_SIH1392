import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Easy Location Services.",
  "Multiple Recycling Options.",
  "Earn Rewards While You Recycle.",
  "Comprehensive Facility Database.",
  "Comprehensive Educational Resources.",
  "User Reviews",
  "User-Centric Design",
  "Ongoing Maintenance and Updates."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (  
    <div className=" bg-teagreen-400">
      <div
        className="max-w-screen-xl h-[100vh] pt-[10rem]  pb-5 px-6 sm:px-8 lg:px-16 mx-auto bg-teagreen-400"
        id="feature"
      >
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
          <ScrollAnimationWrapper className="flex w-full justify-end">
            <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
              <Image
                src="/assets/Illustration2.png"
                alt="VPN Illustrasi"
                layout="responsive"
                quality={100}
                height={414}
                width={508}
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>

          <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-umber-500">
            Effortless Recycling Made Fun
            </h3>
            <p className="my-2 text-umber-600">
            Discover the Fun and Functional Features That Make Recycling Effortless!
            </p>
            <ul className="text-chamoisee-500 self-start list-inside ml-8 py-4">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list py-0.5"
                  custom={{duration: 2 + index}}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                  }}>
                    {feature}
                </motion.li>
                )
              )}
            </ul>
          </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Feature;
