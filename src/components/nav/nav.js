import React, {useRef} from "react";

import "./nav.css";

export default function PageNav() {

  window.onload = function () {
    document.body.topNav += "loaded";



  };
  return (
    <div
      className="topNav"
      style={{
        animation: ".5s ease-out 0s 1 slideInFromRight",
        // background: "linear-gradient(to right, #A9A9A9 0%, transparent 100%)",
        position: "absolute",
        textDecoration: "none",
        zIndex: 1,
      }}
    >
      <ul
        className="links"
        style={{
          textAlign: "center",
          listStyleType: "none",
        }}
      >
        <li
          id="beats"
          style={{
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            const anchor = document.querySelector("#beatsId");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Beats
        </li>
        <li
          id="services"
          style={{
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            const anchor = document.querySelector("#servicesId");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Services
        </li>
        <li
          id="about"
          style={{
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            const anchor = document.querySelector("#aboutUsId");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          About Us
        </li>
        <li
          id="contact"
          style={{
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            const anchor = document.querySelector("#contactId");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Get In Touch
        </li>
      </ul>
    </div>
  );
}
