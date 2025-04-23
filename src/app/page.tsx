// "use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { getClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

export const revalidate = 3600;

async function getData() {
  const client = getClient();
  const data = await client.fetch(HOME_QUERY);
  return data;
}

export default async function  Home() {
  const {profile} = await getData();
  console.log("Sanity data: ", profile)

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
      <div className="px-4 py-4">
        <section className="w-full bg-white/30 backdrop-blur-md p-4 rounded-2xl flex flex-row justify-between fixed top-0 left-0 z-50">
        {/* Portfolio */}
          <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
          {/* Top Nav Bar */}
          <div className="flex flex-row space-x-4 text-2xl font-bold p-4">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </section>
      </div>
      <div className="w-full flex flex-row p-4">
        {/* Image */}
        <div id="home" className="w-full flex justify-center">
          <Image
            src={`${profile.ProfilePic}`}
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full aspect-square"
          />
        </div>
        <div className=" bg-white/30 backdrop-blur-md p-4 rounded-2xl flex-col h-full">
        {/* Summary */}
          <div>
            <p className="flex justify-baseline text-4xl font-bold mb-8">Hello,<br/> I am {profile.titleName}</p>
            <p className="flex justify-baseline text-4xl font-bold mb-8">
              {/* {titles[currentTitleIndex]} */} Full-Stack Developer
            </p>
            <p className="flex justify-center text-lg text-gray-800 py-4">
              Results-driven Software Engineer with over 2 years of experience in full-stack development, microservices architecture, and data processing. Proficient in Angular, Spring Boot, Kafka, Pentaho ETL, and Liquibase with a strong background in building and deploying APIs, responsive UI dashboards, and financial data integration solutions. Additionally skilled in machine learning models and built sample projects using PyTorch, Hugging Face, and SVD. Currently advancing skills in Data science and machine learning through a master’s program. Passionate about developing scalable, high-performance applications and optimizing data workflows.
            </p>
          </div>
          <div className="mt-auto py-2">
            <button className="text-2xl font-bold bg-gradient-to-br from-green-200 via-gray-400 to-gray-300 rounded-2xl max-w-full p-2 flex items-center space-x-2">
              <span>Download Resume</span>
              <IoDocumentTextOutline size={40}/>
            </button>
          </div>
        </div>
      </div>
      {/* Skills */}
      <p className="flex justify-baseline text-4xl font-bold p-4">
        Skills and Tools
      </p>
      <div className="flex flex-row justify-between">
        <div className="w-full max-w-4xl bg-white/30 backdrop-blur-md p-4 rounded-2xl flex flex-row">
        <p className="text-lg text-gray-700">
          Skills : Python, Java, HTML, CSS, React, Spring, Data Analysis, AWS
        </p>
        </div>
        <div className="w-full max-w-4xl bg-white/30 backdrop-blur-md p-4 rounded-2xl flex flex-row">
          <p className="text-lg text-gray-700">
            Tools : Git Hub, vscode, tableau, Pentaho 
          </p>
        </div>
      </div>

      {/* About section */}
      <div id="about" className="mt-8">
        <About/>
      </div>

      {/* Projects section */}
      <div id="projects" className="mt-8">
        <Projects/>
      </div>

      {/* Contact section */}
      <div id="contact" className="mt-8">
        <Contact/>
      </div>
    </main>
  );
}
