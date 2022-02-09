import React, {useEffect} from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import "./companyBio.css";

export default function CompanyBio() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="companyBioWrapper" data-aos="slide-right">
      <h1 className="nPhaseTitle">Who We Are</h1>
      <h3 className="aboutText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ligula leo, volutpat ac ligula sed, pretium efficitur ex. Phasellus
        finibus laoreet est at pharetra. Praesent cursus est vel efficitur
        volutpat. Quisque porttitor efficitur hendrerit. Nam a ullamcorper
        dolor. Vestibulum nisl nibh, congue quis magna nec, placerat ultrices
        dolor. Integer sed nulla vel arcu laoreet tempus. Donec elit est,
        commodo a odio vitae, pharetra rutrum ligula. Ut vitae felis ac elit
        tristique mattis non eu ipsum. Nulla cursus tempor sapien id tincidunt.
      </h3>
    </div>
  );
}
