import React from 'react'
import './footer.css'

import {
  FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt,
  FaInstagram, FaTwitter, FaFacebook, FaLinkedin,FaGithub
} from 'react-icons/fa';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <>
    <footer className="footer container">
      <div className="footer-left">
        <h2 className="footer-title">ASBENDRA SINGH</h2>
        <p className="footer-role">MERN Developer</p>
        <div className="footer-contact">
          <p><FaPhone /> 087 0724 5575</p>
          <p><FaGlobe /> www.website.com</p>
          <p><FaEnvelope /> ashwinmahakal123@gmail.com</p>
          <p><FaMapMarkerAlt /> 64 vill bemara shankargarh, Prayagraj, Uttar Pradesh</p>
        </div>
      </div>

      <div className="footer-navbar">
        <nav>
          <Link to="/" className='footer-link'>Home</Link>
          <Link to="/about" className='footer-link'>About</Link>
          <Link to="/skills" className='footer-link'>Skill</Link>
          <Link to="/projects" className='footer-link'>Projects</Link>
          <Link to="/contacts" className='footer-link'>Contact</Link>
        </nav>
      </div>

      <div className="footer-right">
        <div className="profile-img-container">
          <img src="aswin2.png" alt="Profile" className="profile-img" />
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/ashwin_here4/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='sicons' />
          </a>
          <a href="https://x.com/asbendra_s57710" target="_blank" rel="noopener noreferrer">
            <FaTwitter className='sicons' />
          </a>
          <a href="https://www.facebook.com/asbendra.thakur.1/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className='sicons' />
          </a>
          <a href="https://www.linkedin.com/in/asbendra-singh-549568240/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='sicons' />
          </a>
          <a href="https://github.com/Asbendra8707" target="_blank" rel="noopener noreferrer">
            <FaGithub className='sicons' />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Asbendra Singh. All rights reserved.</p>
      </div>
    </footer>




    </>
  )
}

export default Footer