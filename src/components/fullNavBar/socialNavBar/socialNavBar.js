import React from "react";


import { SiItunes } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "./socialNavBar.css"

export default function SocialNavBar() {
    return(
        <div className="socialNavBar">
          <SiItunes className="iTunesNav" />
          <BsInstagram className="instagramNav" />
          <BsTwitter className="twitterNav" />
        </div>
    )
} 