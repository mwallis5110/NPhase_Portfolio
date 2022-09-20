import React, { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";

import "./scrollButton.css";

const ScrollButton = () => {
  // const [visible, setVisible] = useState(true);

  // const toggleVisible = () => {
  //   const scrolled = document.body.scrollTop;
  //   console.log(scrolled);
  //   if (scrolled > 300) {
  //     setVisible(true);
  //   } else if (scrolled <= 300) {
  //     setVisible(false);
  //   }
  // };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // document.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <button
        className="icon"
        onClick={() => {
          const anchor = document.querySelector("#firstPage");
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        // onClick={scrollToTop}
        // style={{ display: visible ? "inline" : "none" }}
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default ScrollButton;
