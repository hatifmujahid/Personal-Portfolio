import React, { useState, useEffect } from 'react';
import cert1 from "../assets/cert1.jpeg";
import cert2 from "../assets/cert2.jpeg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.png";
import cert6 from "../assets/cert6.png";
import cert7 from "../assets/cert7.png";
import cert8 from "../assets/cert8.png";
import cert9 from "../assets/cert9.png";

const images = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8, cert9];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 3000 milliseconds (3 seconds)

    return () => clearInterval(timer); // Clear the interval when the component unmounts
  }, [currentSlide]);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="relative w-4/5 h-4/5 bg-slate-600 shadow-xl rounded-lg overflow-hidden flex items-center justify-between">
        
        <button
          onClick={prevSlide}
          className="p-2 m-4 h-10 w-10 text-white bg-black rounded-full hover:bg-gray-900 flex items-center justify-center z-10"
        >
          <span>←</span>
        </button>

        <div className="absolute top-0 left-0 w-full h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`absolute transition-all duration-300 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              } w-full h-full object-contain`}
              style={{
                left: index === currentSlide ? '50%' : '-100%',
                transform: index === currentSlide ? 'translateX(-50%)' : 'none',
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 m-4 h-10 w-10 text-white bg-black rounded-full hover:bg-gray-700 flex items-center justify-center z-10"
        >
          <span>→</span>
        </button>

      </div>
    </div>
  );
};

export default Carousel;
