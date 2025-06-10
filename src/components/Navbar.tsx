"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 py-4">
      <section className="w-full bg-white/30 backdrop-blur-md p-4 flex justify-between items-center fixed top-0 left-0 z-50">
        {/* Left-aligned Portfolio Title */}
        <h1 className="text-4xl font-bold pl-10">Portfolio</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row space-x-20 text-2xl font-bold pr-10">
          <Link
            href="/#home"
            className="hover:scale-110 transform transition-transform duration-300 hover:border-b-2 hover:border-black"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="hover:scale-110 transform transition-transform duration-300 hover:border-b-2 hover:border-black"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:scale-110 transform transition-transform duration-300 hover:border-b-2 hover:border-black"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="hover:scale-110 transform transition-transform duration-300 hover:border-b-2 hover:border-black"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden pr-4">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </section>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-24 bg-white/90 backdrop-blur-md p-6 rounded-b-xl shadow-lg space-y-6 text-2xl font-semibold">
          <Link href="/#home" onClick={() => setIsOpen(false)} className="block hover:underline">Home</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="block hover:underline">About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block hover:underline">Projects</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="block hover:underline">Contact</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;