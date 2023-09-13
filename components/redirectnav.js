import React, { useState, useEffect } from "react";
import Link from "next/link";
import ButtonOutline from "./misc/ButtonOutline.";
import Logo1 from "../public/assets/Logo1.png";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-teagreen-400 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center h-10">
            <Image src={Logo1} width={250} height={50} />
          </div>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-umber-500 transition-all">
                HOME
              </a>
            </Link>
            <ButtonOutline>Enquire</ButtonOutline>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
