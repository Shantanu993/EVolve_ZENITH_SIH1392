import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Img1 from "../../public/assets/Logo1.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-teagreen-100 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-4 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          {/* <LogoVPN className="h-13 w-50 mb-6" /> */}
          <Image className="mb-6" src={Img1} width={180} height={70} />
          <p className="mb-4 text-umber-500 font-normal">
            <strong className="font-bold text-umber-600">e-Volve</strong> your E-Waste Disposal and Locator Solution with Unmatched Features and Security.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-umber-600 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-umber-600 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-umber-600 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-umber-500">©{new Date().getFullYear()} - e-Volve</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-all">
              <a href="#about">About</a>
            </li>
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-all">
              <a href="#feature">Features</a>
            </li>
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-all">
              <a href="#pricing">Disposal</a>
            </li>
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-all">
              <a href="#testimoni">Testimonial</a>
            </li>
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-all">
              <a href="#footer">Newsletter</a>
            </li>

          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Customer Care</p>
          <ul className="text-black-500">
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-all">
              Helpline{" "}
            </li>
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-alls">
              FAQ{" "}
            </li>
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-alls">
              Tutorials{" "}
            </li>
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-alls">
              About Us{" "}
            </li>
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-alls">
              Privacy Policy{" "}
            </li>
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-alls">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Rewards</p>
          <ul className="text-black-500">
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-alls">
              Credits{" "}
            </li>
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-alls">
              Redeem Credits{" "}
            </li>
            <li className="my-2 text-umber-600 hover:text-chamoisee-500 cursor-pointer transition-all">
              Offers{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
