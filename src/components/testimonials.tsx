'use client'
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Selena Gomz",
    age: "22 Years",
    review:
      "Fresh Feast has truly revolutionized my approach to eating healthy! Their diverse menu options make it easy to find something delicious and nutritious every time",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Ken",
    age: "24 Years",
    review:
      "I can't thank Fresh Feast enough for simplifying my busy lifestyle. With their meals, I no longer have to sacrifice health for convenience. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Jennifer Sim",
    age: "21 Years",
    review:
      "Fresh Feast has become my go-to solution for nutritious meals with incredible taste. As someone with dietary restrictions, I appreciate the variety and clarity of their menu.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TestimonialsSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 2.2, spacing: 15 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.2, spacing: 10 },
      },
    },
  });

  return (
    <section className="max-w-screen-2xl mx-auto bg-gradient-to-r from-green-700 to-green-400 text-white py-28 px-5 md:px-12">
      <div className=" grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            What Are People Saying <span className="text-yellow-300">About Us</span>
          </h2>
          <p className="mt-4 text-lg max-w-md">
            We are very happy if you are satisfied with our service and products, lets
            read pure reviews from customers
          </p>

          <div className="mt-10 flex items-center space-x-6">
            <span className="text-4xl font-semibold">02</span>
            <span className="text-sm">/ 03</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => instanceRef.current?.prev()}
                className="w-10 h-10 bg-green-800 rounded flex items-center justify-center hover:bg-green-900"
              >
                <ArrowLeft className="text-white" size={20} />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="w-10 h-10 bg-green-800 rounded flex items-center justify-center hover:bg-green-900"
              >
                <ArrowRight className="text-white" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-white text-black rounded-xl shadow-md p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Image
                height={100}
                width={100}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.age}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}