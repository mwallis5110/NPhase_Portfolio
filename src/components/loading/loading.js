import React, {useRef, useEffect} from "react";
import { gsap } from "gsap";

import LogoCircle from "../../assets/logo/logoCircle.png";

export default function LoadingScreen() {

    const imgRef = useRef();

    useEffect(() => {
        gsap.to(imgRef.current, {duration: "2", opacity: "0"} )
    })

    return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20vh",
          }}
        >
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