import React from "react";

import SocialIcons from "../../components/socialIcons/socialIcons";
import PagesDropdown from "../../components/pagesDropdown/pagesDropdown.js";
import "./firstPage.css";

export default function FirstPage() {
  return (
    <div className="firstPageWrapper" id="firstPage">
      <div className="leftSide">
        <PagesDropdown />
      </div>
      <div className="rightSide">
        <SocialIcons />
      </div>
    </div>
  );
}
