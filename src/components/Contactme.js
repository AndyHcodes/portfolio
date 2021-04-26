import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/Contactme.css";

function Contact() {
  const [state, handleSubmit] = useForm("mnqlnlwz");
  if (state.succeeded) {
    return <p className="success-message">Thank you for your message</p>;
  }
  return (
    <div className="contact-form-container">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" />
        <label htmlFor="email">Email Address:</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="text">Type your message here:</label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
