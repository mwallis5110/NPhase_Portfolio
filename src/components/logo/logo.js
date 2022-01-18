import React, {useRef, useEffect} from "react";
import gsap from "gsap";

import mainLogo from "../../assets/logo/mainLogo.png";

import "./logo.css";

export default function Logo() {

    // const imgRef = useRef();

    // useEffect(() => {
    //   gsap.to(imgRef.current, { duration: "0", opacity: "0" });
    // });

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          className="mainLogo"
          //   ref={imgRef}
          src={mainLogo}
          alt="main logo"
          width="300"
          height="300"
          style={{
            marginTop: "55vh",
            backgroundColor: "rgb(255,255,255,0.3)",
          }}
        ></img>
      </div>
    );
}