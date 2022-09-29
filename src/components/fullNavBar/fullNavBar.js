import React from "react";

import PagesNavBar from "./pagesNavBar/pagesNavBar";
import SocialIcons from "../socialIcons/socialIcons";

import "./fullNavBar.css";

export default function fullNavBar() {

  return (
    <div className="navBar">
      <div className="leftSide">
        <PagesNavBar />
      </div>
      <div className="rightSide">
        <SocialIcons />
      </div>
    </div>
  );
}
