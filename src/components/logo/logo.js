import React from "react";

import mainLogo from "../../assets/logo/mainLogo.png";

import "./logo.css";

export default function Logo() {
  return <img className="mainLogo" src={mainLogo} alt="main logo"></img>;
}
