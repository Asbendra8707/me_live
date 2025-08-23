import React from 'react';
import './AboutPage.css';
import { FaDownload } from 'react-icons/fa';

import {
  FaInstagram, FaTwitter, FaFacebook, FaLinkedin
} from 'react-icons/fa';

const AboutPage = () => {
  return (
    <>
      <div className="container about-section text-white py-5" >
        <div className="row" >
          <div className="col-lg-4 mb-4 " data-aos="fade-right">
            <div className="my-4">
              <div className="profile-img-container">
                <img src="aswin2.png" alt="Profile" className="profile-img" />
              </div>
              <div className="social-icons">
                <FaInstagram className='sicons' />
                <FaTwitter className='sicons' />
                <FaFacebook className='sicons' />
                <FaLinkedin className='sicons' />
              </div>
            </div>
            <h2 className="fw-bold mb-3 text-center">Information</h2>
            <h1 className="fw-bold mb-4 text-success text-center">About Me</h1>
            <p className="">
            I’m Asbendra Singh , a passionate and versatile Full Stack Developer with a keen enthusiasm for creating robust and user-friendly web applications. With a foundation in both front-end and back-end development, I thrive in the ever-evolving world of technology and am committed to crafting seamless digital experiences.My journey in web development has equipped me with a comprehensive skill set that spans the entire software development lifecycle. I am proficient in a wide array of programming languages, frameworks, and tools.
            </p> <br />
            <p>I love to power ideas which could change the future of humanity</p>

            <a href="/AsbendraResume.pdf" className="download-btn mt-4" download={'asbendra.pdf'}>
            Download CV <span className="icon"><FaDownload /></span>
          </a>
          </div>

          {/* Right Section */}
          <div className="col-lg-8 p-5">
            <div className="row g-5">
              {/* Embedded Software */}
              <div className="col-md-6" data-aos="fade-down">
                <div className="p-4 border rounded about-card h-100">
                  <h3 className="text-success fw-bold mb-1"style={{fontSize:'50px'}}>Embedded</h3>
                  <h3 className="text-success fw-bold mb-3"style={{fontSize:'50px'}}>Software</h3>
                  <p className="text-secondary small">ARDUINO EXPRESSIF MCU (ESP32)</p>
                </div>
              </div>

              {/* Internet of Things */}
              <div className="col-md-6" data-aos="fade-left">
                <div className="p-4 border rounded about-card h-100">
                  <h3 className="text-success fw-bold mb-1" style={{fontSize:'50px'}}>Internet</h3>
                  <h3 className="text-success fw-bold mb-3" style={{fontSize:'50px'}}>Of Things</h3>
                  <p className="text-secondary small">WIFI</p>
                  <p className="text-secondary small">BLE</p>
                  <p className="text-secondary small">LORA</p>
                  <p className="text-secondary small">LORAWAN</p>
                </div>
              </div>

              {/* Frontend Web */}
              <div className="col-md-6" data-aos="fade-up">
                <div className="p-4 border rounded about-card h-100">
                  <h3 className="text-success fw-bold mb-1" style={{fontSize:'50px'}}>FrontEnd</h3>
                  <h3 className="text-success fw-bold mb-3" style={{fontSize:'50px'}}>Web</h3>
                  <p className="text-secondary small">React.js</p>
                  <p className="text-secondary small">Bootstrap</p>
                  <p className="text-secondary small">HTML</p>
                  <p className="text-secondary small">css</p>
                  <p className="text-secondary small">JavaScript</p>
                </div>
              </div>

              {/* Backend Web */}
              <div className="col-md-6" data-aos="fade-up-left">
                <div className="p-4 border rounded about-card h-100">
                  <h3 className="text-success fw-bold mb-1" style={{fontSize:'50px'}}>Backend</h3>
                  <h3 className="text-success fw-bold mb-3" v>Web</h3>
                  <p className="text-secondary small">MongoDB</p>
                  <p className="text-secondary small">Express</p>
                  <p className="text-secondary small">Node.js</p>
                  <p className="text-secondary small">Redux</p>
                  <p className="text-secondary small">Axios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;