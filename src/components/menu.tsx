"use client";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";


interface MenuItem {
  id: string;
  title: string;
  image: string;
  price: string;
  rating: string;
  description: string;
  flavor: string;
}

export default function MenuSection() {
  const router = useRouter();

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Mexican", "Italian", "Desserts"];

  const items: MenuItem[] = [
    {
      id: "gyro-sandwich",
      title: "Gyro Sandwich",
      image: "/s1.png",
      price: "$15.00",
      rating: "4.9",
      description: "lorem impsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      flavor: "Spicy Garlic",
    },
    {
      id: "chicken-chargha",
      title: "Chicken Chargha",
      image: "/s2.png",
      price: "$25.50",
      rating: "4.0",
      description: "lorem impsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      flavor: "Masala",
    },
    {
      id: "green-beans",
      title: "Green Beans",
      image: "/s3.png",
      price: "$12.00",
      rating: "3.0",
      description: "lorem impsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      flavor: "Herb Garlic",
    },
    {
      id: "chowmein",
      title: "Chowmein",
      image: "/s4.png",
      price: "$18.50",
      rating: "5.0",
      description: "lorem impsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      flavor: "Soy Chili",
    },
    {
      id: "chicken-pot-pie",
      title: "Chicken Pot Pie",
      image: "/s5.png",
      price: "$25.00",
      rating: "4.0",
      description: "lorem impsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      flavor: "Creamy Butter",
    },
    {
      id: "green-salad",
      title: "Green Salad",
      image: "/s6.png",
      price: "$15.00",
      rating: "5.0",
      description: "lorem impsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      flavor: "Minty Lemon",
    },
  ];


  const handleAddToCart = (item: MenuItem) => {
    const query = new URLSearchParams({
      title: item.title,
      price: item.price,
      image: item.image,
      description: item.description,
      flavor: item.flavor,
    }).toString();

    router.push(`/cart?${query}`);
  };

  return (
    <div id="menu" className="max-w-screen-2xl mx-auto py-10 px-5 md:px-12 bg-gradient-to-r from-white to-green-50 overflow-hidden text-center">
      <p className="text-green-500 text-2xl font-medium">Our Menu</p>
      <h2 className="text-4xl md:text-5xl text-black font-bold mb-6">Most Popular Items</h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className="border border-green-500 text-green-600 rounded-full px-4 py-1 hover:bg-green-500 hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10  ">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="bg-white rounded-md shadow hover:shadow-xl transition-shadow duration-300 p-4 cursor-pointer hover:scale-105"
          >
            <Image
              height={200}
              width={200}
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="text-left">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-semibold">{item.title}</h3>
              <span className="text-gray-800 font-semibold">{item.price}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-green-500 text-white text-sm px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  Add To Cart
                </button>
                <div className="flex items-center gap-1 mt-1 text-yellow-500 text-xl">
  {Array.from({ length: 5 }, (_, i) => (
    <AiFillStar
      key={i}
      className={i < Math.round(parseFloat(item.rating)) ? "text-yellow-400" : "text-gray-300"}
    />
  ))}
  <span className="text-gray-500 text-xs ml-1">({item.rating})</span>
</div>
                
              </div>
              
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
