"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/ic1.png",
    title: "Healthy Cooking",
    description:
      "Healthy cooking is a blend of creativity and nutrition, where vibrant ingredients come together for wholesome meals.",
    buttonText: "Learn More",
  },
  {
    icon: "/ic2.png",
    title: "#1 Healthy Cooked Food",
    description:
      "Recognized as the number one ingredient for vitality and well-being for our customers.",
    buttonText: "Learn More",
    highlight: true,
  },
  {
    icon: "/ic3.png",
    title: "100 Top Food Brand",
    description:
      "We are one of the best brands in the Food industry for our beloved customers worldwide.",
    buttonText: "Learn More",
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-screen-2xl mx-auto py-28 px-5 md:px-12  bg-gradient-to-r from-white to-green-50 overflow-hidden text-gray-900">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <h2 className="text-2xl md:text-5xl font-extrabold leading-snug max-w-xl">
            Why Choose us for <br />
            Your <span className="text-green-600">Healthy</span> Food
          </h2>
          <p className="text-gray-500 mt-6 md:mt-0 md:max-w-lg text-lg">
            We’re committed to cook healthy to ensure they retain their freshness and nutritional value, guaranteeing a delightful experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 ">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
              className={`rounded-3xl p-10 cursor-pointer transition-transform bg-white border ${
                feature.highlight
                  ? "border-green-400 shadow-lg bg-green-50"
                  : "border-gray-200 shadow-md"
              }`}
            >
              <div
                className={`w-24 h-24 rounded-xl flex items-center justify-center  ${
                  feature.highlight ? "bg-green-100" : "bg-orange-50"
                }`}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </div>

              <h3
                className={`text-2xl font-bold mb-4 ${
                  feature.highlight ? "text-green-700" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base mb-8">{feature.description}</p>
              <button
                className={`text-sm font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-3 ${
                  feature.highlight
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "text-green-600 border border-green-600 hover:bg-green-50"
                }`}
              >
                {feature.buttonText}
                <svg
                  className={`w-5 h-5 stroke-current ${
                    feature.highlight ? "text-white" : "text-green-600"
                  }`}
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
