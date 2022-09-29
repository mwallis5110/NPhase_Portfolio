import React from "react";

import SocialIcons from "../../components/socialIcons/socialIcons";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contactWrapper" id="contactId">
      <h1 className="contactTitle">Get In Touch</h1>
      <div className="socialComponent">
        <SocialIcons />
      </div>
      <div className="formWrapper">
        <form className="contactForm">
          <input id="name" type="text" placeholder="Name" required></input>
          <input
            id="email"
            type="text"
            placeholder="Email Address"
            required
          ></input>
          <textarea
            id="message"
            type="text"
            rows="5"
            cols="70"
            placeholder="Message"
            required
          ></textarea>
        </form>
        <button className="submitButton">Submit</button>
      </div>
    </div>
  );
}
