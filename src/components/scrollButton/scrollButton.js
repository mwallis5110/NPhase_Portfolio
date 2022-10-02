import React from "react";

import { IoIosArrowUp } from "react-icons/io";

import "./scrollButton.css";

const ScrollButton = () => {
  return (
    <div>
      <button
        className="icon"
        onClick={() => {
          const anchor = document.querySelector("#firstPage");
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default ScrollButton;
