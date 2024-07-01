import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    const prevSlide = (currentSlide - 1 + items.length) % items.length;
    setCurrentSlide(prevSlide);
  };

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % items.length;
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="carousel w-full rounded-lg relative">
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item absolute w-full h-full ${
            index === currentSlide ? "block" : "hidden"
          }`}>
          <img
            src={item.image}
            className="w-full h-full object-cover"
            alt={item.title}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button className="btn btn-circle" onClick={handlePrev}>
              ❮
            </button>
            <button className="btn btn-circle" onClick={handleNext}>
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
