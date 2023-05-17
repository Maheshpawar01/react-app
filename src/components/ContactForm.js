import "./ContactFormStyle.css";

import React from "react";

function ContactUS() {
  return (
    <div className="form-container">
      <h1>Send a Message to us!</h1>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea rows="4" placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactUS;
