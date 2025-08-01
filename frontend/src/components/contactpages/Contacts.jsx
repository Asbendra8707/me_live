import React from 'react'
import { useState } from "react";
import axios from "axios";
import './contact.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';




function Contacts() {
  const navigate = useNavigate();

  const [contactData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/send", contactData);
      alert("Message sent successfully!");
      navigate('/')
    } catch (error) {
      alert("Error sending message.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="contact-container container rounded-5 my-5">
      {/* Contact Info Section */}
      <div className="contact-info">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
        <div className="info-cards">
          <div className="info-card">
            <FaPhone className="info-icon" />
            <p>+91 8707245575</p>
          </div>
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <p>ashwinmahakal123@gmail.com</p>
          </div>
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <p>Prayagraj, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit} autoComplete='off'>
          <h2>Contact Me</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            className="form-textarea"
            required
          ></textarea>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contacts