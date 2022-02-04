import React, { useRef, useEffect } from "react";

import Logo from "../../components/logo/logo.js";

import gsap from "gsap";

import Navbar from "../../components/nav/nav.js";
import MainVid from "../../assets/videos/sample1.mp4";
import ScrollButton from "../../components/scrollButton/scrollButton.js";

import "./firstPage.css";

export default function FirstPage() {
  const firstPageRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      firstPageRef.current,
      { opacity: "0" },
      { duration: "1", opacity: "1" }
    );
  });

  const startVideo = async () => {
    const video = document.querySelector("#firstVideo");

    try {
      await video.play();

      video.setAttribute("autoplay", true);
    } catch (err) {
      console.log(err, "video play error");
      // do stuff in case your video is unavailable to play/autoplay
    }
  };

  setTimeout(startVideo, 500);

  return (
    <div className="firstPageWrapper">
      <div className="firstPageVid" ref={firstPageRef}>
        <Navbar />
        <video className="firstVideo" loop muted>
          <source src={MainVid} type="video/mp4" />
        </video>
        <div className="logoWrapper">
          <Logo />
        </div>
        <ScrollButton />
      </div>
    </div>
  );
}
