import React from 'react'
import './profile.css'

import { useState } from 'react';
import { FaReact } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa";

function Profile() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px',
                // marginTop: '90px',
                background: '#14471a',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                // maxWidth: '1000px',
                margin: 'auto',
                gap: '50px',
                fontFamily: 'sans-serif',
                transition: 'box-shadow 0.3s ease',
            }} className='mt-5 container'>

                {/* Image Section */}
                <div
                    style={{
                        flex: '1 1 280px',
                        minWidth: '150px',
                        height: '350px',
                        borderRadius: '36px',
                        overflow: 'hidden',
                        boxShadow: '0 0 12px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        border: '4px solid transparent',
                        backgroundImage: 'linear-gradient(#fff, #fff), radial-gradient(circle at top left, #ff6a00, #ee0979)',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 0 16px rgba(255,106,0,0.6)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 0 12px rgba(0,0,0,0.2)';
                    }}
                >
                    <img
                        src="Ashwin4.jpg"
                        alt="Visual"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: '', // fills the div while preserving aspect ratio
                        }}
                    />
                </div>


                {/* Content Section */}
                <div style={{
                    flex: '1 1 300px',
                    minWidth: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    textAlign: 'center'
                }}>
                    {/* MORTAL */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginRight: '12px' }} className='text-black'>👋Hello,It's Me</h1>
                        <div style={{
                            width: '40px',
                            height: '20px',
                            backgroundColor: '#333',
                            borderRadius: '10px',
                            position: 'relative'
                        }}>
                            <div style={{
                                width: '18px',
                                height: '18px',
                                backgroundColor: '#f5f0e6',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '1px',
                                left: '2px'
                            }} />
                        </div>
                    </div>

                    {/* Asbendra Singh */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h1
                            style={{
                                display: 'flex',
                                fontSize: '42px',
                                fontWeight: 'bold',
                                marginRight: '12px',
                                fontFamily: '"Playfair Display", serif',
                                gap: '4px',
                                flexWrap: 'wrap',
                            }}
                            className='text-white'
                        >
                            {'ASBENDRA  SINGH'.split('').map((char, idx) => (
                                <span key={idx} className="letter">{char}</span>
                            ))}
                        </h1>
                    </div>


                    {/* Developer*/}
                    <div>
                        <p style={{ fontSize: '38px', margin: 0 }} className='text-black'>
                            M<svg
                                viewBox="0 0 128 128"
                                width="35"
                                height="35"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                            >
                                {/* Leaf shape */}
                                <path
                                    d="M64 8C64 8 32 48 32 80C32 112 64 120 64 120C64 120 96 112 96 80C96 48 64 8 64 8Z"
                                    fill="#10AA50"
                                />
                                {/* Leaf vein */}
                                <path
                                    d="M64 24V104"
                                    stroke="#14532D"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>

                            E<svg
                                width="40"
                                height="40"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Background Circle */}
                                <circle cx="50" cy="40" r="40" fill="black" />

                                {/* Text */}
                                <text
                                    x="50%"
                                    y="40%"
                                    textAnchor="middle"
                                    dy=".3em"
                                    fontSize="40"
                                    fill="white"
                                    fontFamily="Arial, sans-serif"
                                >
                                    ex
                                </text>
                            </svg>
                            R<FaReact style={{ color: 'blue' }} />N<FaNodeJs style={{ color: 'greenyellow' }} /></p>
                        <h2 style={{
                            fontSize: '64px',
                            fontWeight: 'bold',
                            color: 'transparent',
                            WebkitTextStroke: '1.5px white',
                            margin: '4px 0'
                        }} className=''>Developer</h2>
                    </div>

                    {/* Accordion Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            marginTop: '0px',
                            padding: '10px 20px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontFamily: '"Playfair Display", serif',
                            color: 'white',
                            backgroundImage: 'linear-gradient(to right, green, #ED8F03)',
                            border: '2px solid transparent',
                            borderRadius: '12px',
                            backgroundClip: 'padding-box',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            transition: 'all 0.4s ease',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.border = '2px solid white';
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.border = '2px solid transparent';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        {isOpen ? 'Hide Details' : 'About me'}
                        <span
                            style={{
                                display: 'inline-block',
                                transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            ➤
                        </span>
                    </button>

                    {/* Accordion*/}
                    <div style={{
                        maxHeight: isOpen ? '300px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.5s ease',
                    }}>
                        <div style={{
                            marginTop: '10px',
                            padding: isOpen ? '15px' : '0px',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            opacity: isOpen ? 1 : 0,
                            transition: 'opacity 0.5s ease'
                        }}>
                            <h5 style={{ fontSize: '15px', lineHeight: '1.6', margin: 0, fontWeight: 'bold' }}>
                                I am a passionate MERN stack developer skilled in building dynamic web applications using MongoDB, Express.js, React, and Node.js.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>






            <div style={{
                display: 'flex',
                backgroundColor: '#14471a',
                borderRadius: '16px',
                padding: '52px',
                gap: '52px',
                color: '#fff',
                // height:'900px',
                // marginTop:'90px',
                alignItems: 'center',
                flexWrap: 'wrap'
            }} className='container my-5'>
                {/* Left section */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h2
                        style={{
                            fontSize: '38px',
                            marginBottom: '16px',
                            fontFamily: '"Playfair Display", serif',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '2px',
                            justifyContent: 'center',
                        }}
                    >
                        {'Asbendra Singh'.split('').map((char, idx) => (
                            <span key={idx} className="hover-letter">
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h2>

                    <h4 style={{ color: '#a0a0a0', marginBottom: '24px' }}>
                    "Asbendra Singh – Full Stack Developer | MERN Stack Enthusiast | Problem Solver"
                    </h4>

                    <div style={{
                        backgroundColor: '#D1A054',
                        borderRadius: '12px',
                        padding: '24px',
                        marginTop: '40px'
                    }}>
                        <h4 style={{ fontStyle: 'italic' }}>
                        I’m Asbendra Singh, a Full Stack Developer passionate about crafting scalable web solutions using modern technologies like MERN Stack. I enjoy building user-friendly interfaces, designing efficient back-end systems, and solving complex coding challenges. My mission is to develop high-quality digital products that leave a lasting impact.
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                            <img
                                src="Ashwin4.jpg"
                                alt="Asbendra Singh"
                                style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '12px' }}
                            />
                            <div>
                                <h5 style={{ margin: 0, color: 'black', fontFamily: '"Playfair Display", serif' }}>Asbendra Singh</h5>
                                <h6 style={{ margin: 0, color: '#EDEDED' }}>Founder of this page</h6>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right section */}
                <div
                    style={{
                        flex: 1,
                        minWidth: '300px',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '6px', // spacing for border reveal
                    }}
                >
                    <div
                        style={{
                            borderRadius: '20px',
                            padding: '4px',
                            background: 'linear-gradient(360deg, #f5c518, #ff6a00)', // gradient border
                            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                            boxShadow: '0 0 8px rgba(0,0,0,0.3)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.03)';
                            e.currentTarget.style.boxShadow = '0 0 16px rgba(245,197,24,0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 0 8px rgba(0,0,0,0.3)';
                        }}
                    >
                        <img
                            src="Ashwin4.jpg"
                            alt="Profile image"
                            style={{
                                width: '100%',
                                height:'100%',
                                maxWidth: '600px',
                                borderRadius: '16px',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile