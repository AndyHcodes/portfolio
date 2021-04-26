import React from "react";
import "../styles/Contactme.css";

function Contact() {
  return (
    <div className="contact-form-container">
      <h1>Contact Me</h1>
      <div className="contact-details">
        <ul>
          <i className="fa fa-phone-square" ari-hidden="true" />
          <span>07855018590</span>
        </ul>
        <ul>
          <i className="fa fa-envelope" ari-hidden="true" />
          <span>andyhcodes@gmail.com</span>
        </ul>
        <ul>
          <i className="fa fa-address-book" ari-hidden="true" />
          <span>Sale, Manchester</span>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
