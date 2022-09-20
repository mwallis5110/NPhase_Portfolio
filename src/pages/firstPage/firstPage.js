import React from "react";

import FullNavbar from "../../components/fullNavBar/fullNavBar.js";
import ScrollButton from "../../components/scrollButton/scrollButton.js";

import "./firstPage.css";

export default function FirstPage() {

  return (
      <div className="firstPageWrapper">
        <FullNavbar />
        <ScrollButton />
      </div>
  );
}