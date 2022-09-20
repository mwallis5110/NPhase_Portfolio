import React from "react";

import NavLogo from "../../../assets/logo/logoCircle.png";

import "./pagesNavBar.css";

export default function PagesNavBar() {
  return (
    <div className="pagesNavBar">
      <img className="navLogo" src={NavLogo} alt="small logo" />
      <ul className="links">
        <li
          className="beats"
          onClick={() => {
            const anchor = document.querySelector("#beatsId");
            anchor.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Beats
        </li>
        <li
          className="mixes"
          onClick={() => {
            const anchor = document.querySelector("#mixesId");
            anchor.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Mixes
        </li>
        <li
          className="services"
          onClick={() => {
            const anchor = document.querySelector("#servicesId");
            anchor.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Services
        </li>
        <li
          className="about"
          onClick={() => {
            const anchor = document.querySelector("#aboutUsId");
            anchor.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          About Us
        </li>
        <li
          className="contact"
          onClick={() => {
            const anchor = document.querySelector("#contactId");
            anchor.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Get In Touch
        </li>
      </ul>
    </div>
  );
}
