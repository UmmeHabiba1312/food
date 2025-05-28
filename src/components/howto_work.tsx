import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      title: "CHOOSE",
      image: "/laptop.png",
      description:
        "Explore a diverse menu curated for your tastes and dietary needs. Select your favorites with ease and place order.",
    },
    {
      title: "PREPARE",
      image: "/fci.png",
      description:
        "Our culinary artisans spring into action, crafting each dish with meticulous care and the freshest ingredients.",
    },
    {
      title: "DELIVER",
      image: "/db.png",
      description:
        "Sit back and relax as our dedicated team orchestrates a seamless delivery experience. Ready to be savored and enjoyed!",
    },
  ];

  return (
    <section id="how-it-works" className="bg-gradient-to-r from-white to-green-50  py-20 px-5 max-w-screen-2xl mx-auto md:px-12 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-green-600 text-2xl font-semibold uppercase tracking-wide mb-2">How It Works</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          From <span className="text-green-600">Order</span> to{" "}
          <span className="text-green-600">Doorstep</span> in 20 Minutes
        </h2>
      </div>

   

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 group"
          >
            <div className="w-40 h-40 relative mb-4">
              <Image src={step.image} alt={step.title} fill className="object-contain" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600">{step.title}</h3>
            <p className="mt-2 text-gray-500 text-md tracking-wider max-w-sm group-hover:text-green-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
