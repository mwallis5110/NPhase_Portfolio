import React from "react";

import { SiItunes } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "./socialIcons.css";

export default function SocialIcons() {
  return (
    <div className="socialIcons">
      {/* <a href="" target="_blank" rel="noreferrer"> */}
      <SiItunes className="iTunesIcon" />
      {/* </a> */}
      <a
        href="https://www.instagram.com/Nphaserecords/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className="instagramIcon" />
      </a>
      <a
        href="https://twitter.com/nphaserecords"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter className="twitterIcon" />
      </a>
    </div>
  );
}
