import React, { useRef } from "react";

import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

import "./nav.css";

export default function PageNav() {
  window.onload = function () {
    document.body.topNav += "loaded";
  };
  return (
    <div className="navBar">
      <div className="leftSide">
        <ul className="links">
          <li
            id="beats"
            onClick={() => {
              const anchor = document.querySelector("#beatsId");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Beats
          </li>
          <li
            id="services"
            onClick={() => {
              const anchor = document.querySelector("#servicesId");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Services
          </li>
          <li
            id="about"
            onClick={() => {
              const anchor = document.querySelector("#aboutUsId");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            About Us
          </li>
          <li
            id="contact"
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
        <BsInstagram className="instagramNav" />
        <BsSpotify className="spotifyNav" />
        <BsYoutube className="youtubeNav" />
        <BsTwitter className="twitterNav" />
      </div>
    </div>
  );
}
