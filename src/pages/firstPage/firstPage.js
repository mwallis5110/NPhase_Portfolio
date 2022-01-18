import React, {useRef, useEffect} from "react";


import gsap from "gsap";

import MainVid from "../../assets/videos/sample1.mp4";

import "./firstPage.css";

export default function FirstPage() {

    const firstPageRef = useRef();

    useEffect(() => {
        gsap.fromTo(firstPageRef.current, {opacity: "0"}, {duration: "1", opacity: "1"})
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
    <div
      className="firstPageVid"
      ref={firstPageRef}
    >
      <video id="firstVideo"
        // autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -2,
        }}
      >
        <source src={MainVid} type="video/mp4" />
        {/* <MuteButton /> Autoplay works (halleluja). Just needs a mute/unmute button */}
      </video>
    </div>
  );
}
