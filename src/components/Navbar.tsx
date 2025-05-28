"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="#" className="bg-green-600 max-w-screen-2xl mx-auto text-white px-5 md:px-12 py-3  fixed w-full top-0 z-50 ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h2 className="leading-relaxed font-medium   cursor-pointer">
          <Link href="#"><Image src="/logo.png" alt="Logo" width={60} height={50} className="object-contain" /></Link>
        </h2>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#" className="hover:text-green-400 transition duration-300">Home</Link>
          <Link href="#services" className="hover:text-green-400 transition duration-300">Services</Link>
          <Link href="#menu" className="hover:text-green-400 transition duration-300">Menu</Link>
          {/* <Link href="#about" className="hover:text-green-400 transition duration-300">About</Link> */}
          <Link href="#contact" className="hover:text-green-400 transition duration-300">Contact</Link>
          <button className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-md transition">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-[#0F2C27] px-6 py-4 rounded-lg">
          <Link href="#" className="hover:text-green-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#menu" className="hover:text-green-400" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="#about" className="hover:text-green-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#contact" className="hover:text-green-400" onClick={() => setIsOpen(false)}>Contact</Link>
          <button className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full transition">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
