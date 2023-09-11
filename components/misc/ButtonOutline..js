import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-umber-500 text-umber-500 bg-transparent outline-none rounded-l-full rounded-r-full capitalize hover:bg-umber-500 hover:text-white-500 transition-all hover:shadow-chamoisee ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
