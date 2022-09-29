import React from "react";

import { SiItunes } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "./socialIcons.css";

export default function SocialIcons({ paddingRight, paddingLeft }) {
  return (
    <div className="socialIcons">
      <SiItunes className="iTunesIcon" href="" />
      <BsInstagram
        className="instagramIcon"
        href="https://www.instagram.com/Nphaserecords/?hl=en"
      />
      <BsTwitter
        className="twitterIcon"
        href="https://twitter.com/nphaserecords"
      />
    </div>
  );
}
