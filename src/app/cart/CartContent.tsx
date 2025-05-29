"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function CartContent() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "Green Salad";
  const fullPlatePrice = 20.5;
  const halfPlatePrice = 12.5;

  const image = searchParams.get("image") || "/placeholder.png";
  const description =
    searchParams.get("description") ||
    "A fresh and healthy green salad made with the finest organic ingredients.";

  const [quantity, setQuantity] = useState(1);
  const [plateSize, setPlateSize] = useState("Full plate");
  const [price, setPrice] = useState(fullPlatePrice);

  useEffect(() => {
    if (plateSize === "Full plate") {
      setPrice(fullPlatePrice * quantity);
    } else {
      setPrice(halfPlatePrice * quantity);
    }
  }, [plateSize, quantity]);

  const handleAddToCart = () => {
    toast.success(
      `Added ${quantity} ${plateSize}${quantity > 1 ? "s" : ""} of ${title} to cart!`,
      {
        style: {
          background: "white",
          color: "green",
          fontWeight: "semibold",
          fontSize: "16px",
        },
      }
    );
  };

  return (
    <main className="bg-white p-5 min-h-screen max-w-screen-2xl mx-auto">
      <div className="container mx-auto px-6 py-12 bg-white mt-16 flex flex-col md:flex-row gap-12">

        <div className="relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden shadow-lg">
          <Image src={image} alt={title} fill className="object-cover" priority />
        </div>


        <div className="md:w-1/2 flex flex-col justify-center space-y-5">
          <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
          <p className="text-gray-400 text-base leading-relaxed tracking-wide">{description}</p>
          <p className="text-2xl text-green-600 font-extrabold">${price.toFixed(2)}</p>


          <div>
            <p className="font-semibold text-gray-800 mb-3 text-base">Size Of Crust</p>
            <div className="flex gap-5">
              {["Full plate", "Half plate"].map((size) => (
                <button
                  key={size}
                  onClick={() => setPlateSize(size)}
                  className={`px-6 py-3 rounded-md font-semibold border transition-shadow duration-300 ${
                    plateSize === size
                      ? "bg-green-600 text-white border-green-600 shadow-lg"
                      : "text-gray-700 border-gray-300 hover:bg-green-50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>


          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
            <div>
              <p className="font-semibold text-gray-800 mb-3 text-base">Quantity</p>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-md text-white text-2xl font-bold hover:bg-green-700 transition"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="text-2xl font-semibold text-gray-900 min-w-[50px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-12 h-12 flex items-center justify-center bg-green-600 rounded-md text-white text-2xl font-bold hover:bg-green-700 transition"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4 sm:mt-0">
              <button
                onClick={handleAddToCart}
                className="bg-green-600 hover:bg-green-600 text-white font-bold rounded-md py-3 px-6 shadow-xl transition focus:outline-none focus:ring-4 focus:ring-green-600 text-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
