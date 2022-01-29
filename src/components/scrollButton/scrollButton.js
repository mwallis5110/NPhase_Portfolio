import React, { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";

import "./scrollButton.css";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="scrollButtonWrapper">
      <button
        className="icon"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
}
