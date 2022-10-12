import React from "react";

import Products from "../../components/products/products.js";
import CompanyBio from "../../components/companyBio/companyBio.js";

import "./aboutUs.css";

export default function AboutUs() {

  return (
    <div className="aboutUsWrapper" id="aboutUsId">
      <CompanyBio />
      <Products />
    </div>
  );
}
