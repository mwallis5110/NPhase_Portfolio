import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import LogoCircle from "../../assets/logo/logoCircle.png";

import "./loading.css";

export default function LoadingScreen() {
  const imgRef = useRef();

  useEffect(() => {
    gsap.to(imgRef.current, { duration: "2", opacity: "0" });
  });

  return (
    <div className="loadingScreen">
      <img
        className="logoCircle"
        ref={imgRef}
        src={LogoCircle}
        alt="Circle part of NPhase logo"
        width="200"
        height="200"
      ></img>
    </div>
  );
}
