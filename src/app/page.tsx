// "use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { getClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { useState, useEffect } from "react";


export const revalidate = 3600;

export default async function  Home() {

  // const titles = ["Software Engineer", "Full-Stack Developer", "Data Analyst"];
  // const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTitleIndex((prevIndex) => (prevIndex +1) % titles.length);
  //   }, 2000);
  //   return()=>clearInterval(interval);
  // }, []);
  return (
    // Main
    <main className="min-h-screen bg-gradient-to-br from-green-200 via-gray-300 to-gray-400 pt-24">
      <div><Navbar/></div>

      <div><Profile/></div>

      <div><Skills/></div>

      {/* About section */}
      <div id="about" className="mt-8"><About/></div>

      {/* Projects section */}
      <div id="projects" className="mt-8"><Projects/></div>

      {/* Contact section */}
      <div id="contact" className="mt-8"><Contact/></div>
    </main>
  );
}
