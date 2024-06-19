import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_USER_ID'
    )
      .then((result) => {
        alert('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <section className="contact-us-section">
      <h2>Contact Us</h2>
      <p className="section-description">
        We would love to hear from you! Whether you have questions, feedback, or just want to say hello, please reach out to us.
      </p>
      <div className="contact-form-container">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
