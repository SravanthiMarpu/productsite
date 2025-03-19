// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  {/* handleSubmit:
This function is triggered when the form is submitted.
e.preventDefault() is used to stop the page from refreshing upon form submission.
It logs the form data to the console (In a real app, you would send this data to an API or handle the form submission logic).
Once the form is successfully submitted, it sets the isSubmitted state to true, and a success message is displayed. */}
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
