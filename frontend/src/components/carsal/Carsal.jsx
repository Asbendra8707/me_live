import React from 'react'
import './carsal.css'

import { useState,useEffect } from "react";
const movies = [
  {
    title: "",
    description:
      "",
    image:
      "reactlogo.png",
  },
  {
    title: "",
    description:
      "",
    image:
      "Expressjs.png",
  },
  {
    title: "",
    description:
      "",
    image:
      "Mongodb.png",
  },
  {
    title: "",
    description:
      ".",
    image:
      "Nodejs.png",
  },
];



function Carsal() {
  const [current, setCurrent] = useState(1);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  // AutoSlide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
    },4000); // slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <>
    <div className="slider-wrapper container">
      <button className="nav-arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="slider">
        {movies.map((movie, index) => {
          let position = "nextSlide";
          if (index === current) {
            position = "activeSlide";
          } else if (
            index === current - 1 ||
            (current === 0 && index === movies.length - 1)
          ) {
            position = "prevSlide";
          }

          return (
            <div className={`slide ${position}`} key={index}>
              <img src={movie.image} alt={movie.title} />
              <div className="info">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="nav-arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
    </>
  )
}

export default Carsal