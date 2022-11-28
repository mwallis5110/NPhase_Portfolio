import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import SocialIcons from "../../components/socialIcons/socialIcons";

import "./contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tegoswo",
        "template_ozh1huy",
        form.current,
        "hOTuZfHLofJWCf3J9"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result);
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully. We'll contact you soon",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error",
            text: "An error occurred when sending the message. Please email us at Nphaseatx@gmail.com instead",
          });
        }
      );
  };

  return (
    <div className="contactWrapper">
      <h1 className="contactTitle" id="contactId">
        Get In Touch
      </h1>
      <div className="socialComponent">
        <SocialIcons />
      </div>

      <div className="formWrapper">
        <h4 className="contactText">
          Interested in collaborating with NPhase Records?
        </h4>
        <h4 className="contactText">
          Let us know what you`re working on, how far along you are, and what
          services you think you may need.
        </h4>
        <h4 className="contactText">
          We`ll contact you within 72 hours to begin our consultation process.
        </h4>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            id="name"
            type="text"
            name="user_name"
            placeholder="Name"
            required
          />
          <input
            id="email"
            type="text"
            name="user_email"
            placeholder="Email Address"
            required
          />
          <textarea
            id="message"
            type="text"
            name="message"
            rows="5"
            cols="70"
            placeholder="Message"
            required
          />
          <input className="submitButton" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
