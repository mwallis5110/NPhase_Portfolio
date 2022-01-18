import React from "react";
import {HashLink, NavHashLink} from "react-router-hash-link";
// import smallLogo from "../../assets/logo/logoCircle.png"

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
        // float: "left",
      }}
    >
      <ul
        className="links"
        style={{
          textAlign: "center",
          listStyleType: "none",
        }}
      >
        <li>
          <HashLink to="/"></HashLink>
        </li>
        <li>
          <HashLink smooth to="/beats"
            id="beats"
            style={{
              color: "white",
            }}
          >
            Beats
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/services"
            id="services"
            style={{
              color: "white",
            }}
          >
            Services
          </HashLink>
        </li>
        <li>
          <HashLink
           to="/about"
            id="about"
            style={{
              color: "white",
            }}
          >
            About Us
          </HashLink>
        </li>
        <li>
          <HashLink
           to="/contact"
            id="contact"
            style={{
              color: "white",
            }}
          >
            Get In Touch
          </HashLink>
        </li>
      </ul>
    </div>
  );
}
