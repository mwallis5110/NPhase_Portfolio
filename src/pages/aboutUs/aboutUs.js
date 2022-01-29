import React from "react";

import Bios from "../../components/bios/bios.js";
import CompanyBio from "../../components/companyBio/companyBio.js";

import "./aboutUs.css";

export default function AboutUs() {

  return (
    <div className="aboutUsWrapper" id="aboutUsId">
      <h1>Our Team</h1>
      <Bios />
      <CompanyBio />
    </div>
  );
}
