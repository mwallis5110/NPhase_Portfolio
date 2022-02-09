import React from "react";


import { SiItunes } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import Logo from "../../components/logo/logo.js";
import Navbar from "../../components/nav/nav.js";
import MainVid from "../../assets/videos/sample1.mp4";
import ScrollButton from "../../components/scrollButton/scrollButton.js";
import AnimatedImage from "../../assets/images/animatedImage.gif"

import "./firstPage.css";

export default function FirstPage() {
  const startVideo = async () => {
    const video = document.querySelector("#firstVideo");

    try {
      await video.play();

      video.setAttribute("autoplay", true);
    } catch (err) {
      console.log(err, "video play error");
      // does stuff in case video is unavailable to play/autoplay
    }
  };

  setTimeout(startVideo, 1500);

  return (
      <div className="firstPageWrapper">
        <Navbar />
        <div className="rightSide">
          {/* Cursor: pointer needs to be working */}
          <SiItunes className="iTunesNav" />
          <BsInstagram className="instagramNav" />
          <BsTwitter className="twitterNav" />
        </div>
        {/* <img className="animatedImage" alt="main page animated gif" src={AnimatedImage} type="gif" >
        </img> */}
        <div className="logoWrapper">
          <Logo />
        </div>
        <ScrollButton />
      </div>
  );
}