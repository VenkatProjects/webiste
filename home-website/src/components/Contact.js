import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message from ${formData.name}: ${formData.message}`);
  };

  return (
    <section>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;