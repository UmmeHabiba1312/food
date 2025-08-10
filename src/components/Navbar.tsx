"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 max-w-screen-2xl mx-auto text-white px-5 md:px-12 py-3 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="#">
          <Image src="/logo.png" alt="Logo" width={60} height={50} className="object-contain cursor-pointer" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="#" className="hover:text-green-300 transition">Home</Link>
          <Link href="#services" className="hover:text-green-300 transition">Services</Link>
          <Link href="#menu" className="hover:text-green-300 transition">Menu</Link>
          <Link href="#contact" className="hover:text-green-300 transition">Contact</Link>
          <button className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md transition">
            Order Now
          </button>

          {/* Clerk Auth Buttons */}
          <SignedOut>
            <SignInButton>
              <button className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-green-100">
                Login
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-green-600">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
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
          <Link href="#services" className="hover:text-green-400" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#menu" className="hover:text-green-400" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="#contact" className="hover:text-green-400" onClick={() => setIsOpen(false)}>Contact</Link>
          <button className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full transition">
            Order Now
          </button>

          {/* Clerk Auth Mobile */}
          <SignedOut>
            <SignInButton>
              <button className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-green-100">
                Login
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-green-600">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}
    </nav>
  );
}
