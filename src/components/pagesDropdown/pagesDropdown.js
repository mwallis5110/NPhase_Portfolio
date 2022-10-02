import React from "react";

import NavLogo from "../../assets/logo/logoCircle.png";
import { menuItems } from "./menuItems";

import "./pagesDropdown.css";

export default function PagesDropdown() {
  return (
    <div className="pagesNavBar">
      <img
        id="navLogo"
        a
        href="/"
        src={NavLogo}
        alt="Nav bar logo, takes user to top of page"
      />
      <ul className="links">
        {menuItems.map((menu, index) => {
          return (
            <li
              className="menuItems"
              key={index}
              onClick={() => {
                const anchor = document.querySelector(menu.anchor);
                anchor.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {menu.title}
            </li>
          );
        })}
        {/* <li
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
        </li> */}
      </ul>
    </div>
  );
}
