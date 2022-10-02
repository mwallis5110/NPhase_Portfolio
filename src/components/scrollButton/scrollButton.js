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

//TODO in future: display: none if app hasn't been scrolled. 
//Problem is that only app is scrolling and window doesn't register scroll (overflow-y: scroll)
