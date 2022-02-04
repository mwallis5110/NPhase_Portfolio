import React from "react";

import NavLogo from "../../assets/logo/logoCircle.png";
import {SiItunes} from "react-icons/si"
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import "./nav.css";

export default function PageNav() {
  return (
    <div className="navBar">
      <div className="leftSide">
        <img className="navLogo" src={NavLogo} alt="small logo" />
        <ul className="links">
          <li
            className="beats"
            onClick={() => {
              const anchor = document.querySelector("#beatsId");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Beats
          </li>
          <li
            className="services"
            onClick={() => {
              const anchor = document.querySelector("#servicesId");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Services
          </li>
          <li
            className="about"
            onClick={() => {
              const anchor = document.querySelector("#aboutUsId");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            About Us
          </li>
          <li
            className="contact"
            onClick={() => {
              const anchor = document.querySelector("#contactId");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Get In Touch
          </li>
        </ul>
      </div>
      <div className="rightSide">
        <SiItunes className="iTunesNav" />
        <BsInstagram className="instagramNav" />
        <BsTwitter className="twitterNav" />
      </div>
    </div>
  );
}
