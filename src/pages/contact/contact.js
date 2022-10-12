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
        "service_fjghc46",
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
            text: "An error occurred when sending the message. Please email us at **Email address** instead",
          });
        }
      );
  };

  return (
    <div className="contactWrapper" id="contactId">
      <h1 className="contactTitle">Get In Touch</h1>
      <div className="socialComponent">
        <SocialIcons />
      </div>
      <div className="formWrapper">
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
