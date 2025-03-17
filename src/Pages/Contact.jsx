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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
