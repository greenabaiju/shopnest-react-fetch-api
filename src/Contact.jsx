
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">

      <div className="contact-title">
        <span>GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>Have a question? We are happy to help.</p>
      </div>

      <div className="contact-box">

        <div className="contact-card">
          <div className="contact-icon">✉</div>
          <h3>Email</h3>
          <p>support@shopnest.com</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">☎</div>
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">⌖</div>
          <h3>Location</h3>
          <p>Kerala, India</p>
        </div>

      </div>

    </section>
  );
};

export default Contact;
