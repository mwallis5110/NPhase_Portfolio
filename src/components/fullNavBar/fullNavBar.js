import React from "react";

import PagesNavBar from "./pagesNavBar/pagesNavBar";
import SocialNavBar from "./socialNavBar/socialNavBar";

import "./fullNavBar.css";

export default function fullNavBar() {
  return (
    <div className="navBar">
      <div className="leftSide">
        <PagesNavBar />
      </div>
      <div className="rightSide">
        <SocialNavBar />
      </div>
    </div>
  );
}
