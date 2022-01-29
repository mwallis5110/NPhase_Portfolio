import React, {FormEvent} from "react";

// import Instagram from "../../assets/images/instagram.png";
// import Spotify from "../../assets/images/spotify.png";
// import Twitter from "../../assets/images/twitter.png";

import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

import "./contact.css";

export default function Contact() {

  return (
    <div className="contactWrapper" id="contactId">
      <h1>Get In Touch</h1>
      <div className="socialMedia">
        <BsInstagram className="instagram" />
        <BsSpotify className="spotify" />
        <BsYoutube className="youtube" />
        <BsTwitter className="twitter" />
      </div>
      <div className="formWrapper">
          <form>
            <div className=""></div>
            <div className="formGroup">

            </div>
          </form>
          <button className="submitButton">Submit</button>
      </div>
    </div>
  );
}
