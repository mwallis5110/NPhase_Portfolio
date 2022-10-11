import React from "react";

import SocialIcons from "../../components/socialIcons/socialIcons";
import PagesDropdown from "../../components/pagesDropdown/pagesDropdown.js";
import "./firstPage.css";

export default function FirstPage() {
  return (
    <div className="firstPageSection" id="firstPage">
      <div className="leftSideNav">
        <PagesDropdown />
      </div>
      <div className="rightSideNav">
        <SocialIcons />
      </div>
    </div>
  );
}
