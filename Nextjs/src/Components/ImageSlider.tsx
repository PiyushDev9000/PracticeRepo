"use client";
import { useState } from "react";

//array of imgs

const images = [
  "https://i.pinimg.com/736x/52/f9/7c/52f97cef3cab0058c99ee61a914b49ca.jpg",
  "https://i.pinimg.com/736x/61/76/22/6176222d555e0023f9bcd1a50bab374c.jpg",
  "https://i.pinimg.com/736x/ae/bd/c6/aebdc63e8f62ad58fdffc91c289a17bb.jpg",
  "https://i.pinimg.com/736x/34/50/14/3450145f04c4e946013937669ce2660a.jpg",
  "https://i.pinimg.com/736x/dc/26/21/dc262104d1e9ae09325dc478011f11ee.jpg",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex, "CURRENT");

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden ">
      <div>
        <h1 className="text-black text-4xl my-2 flex justify-center font-serif">
          IMAGE SLIDER
        </h1>
      </div>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-64 object-cover flex-shrink-0 rounded-xl"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#10095;
      </button>

      <div className="mt-2 flex justify-between">
        <p className="text-black">Current Slide</p>
        <p className="text-black">{currentIndex + 1}</p>
      </div>
    </div>
  );
}
