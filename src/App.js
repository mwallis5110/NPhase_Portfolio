import React, { useState, useEffect } from "react";

import FirstPage from "./pages/firstPage/firstPage.js";
import Beats from "./pages/beats/beats.js";
import Mixes from "./pages/mixes/mixes.js";
import Services from "./pages/services/services.js";
import AboutUs from "./pages/aboutUs/aboutUs.js";
import Contact from "./pages/contact/contact.js";
import LoadingScreen from "./components/loading/loading.js";
import ScrollButton from "./components/scrollButton/scrollButton.js";

import LogoBackground from "./assets/logoBackgroundAnimation.mp4";

import "./App.css";

export default function App() {
  // Determines whether page is loading, then returns either loading screen or first page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const startVideo = async () => {
    const video = document.querySelector("#mainVideo");

    try {
      await video.play();

      video.setAttribute("autoplay", true);
    } catch (err) {
      console.log(
        err,
        "Video play error. Your browser does not support this file type"
      );
      //Throws error if video is unable to play/autoplay
    }
  };

  setTimeout(startVideo, 1000);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <video muted autoPlay id="mainVideo">
            <source
              src={LogoBackground}
              type="video/mp4"
              alt="Background animation of logo"
            />
          </video>
          <div className="pages" id="pages">
            <ScrollButton />
            <FirstPage />
            <Beats />
            <Mixes />
            <Services />
            <AboutUs />
            <Contact />
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
