import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { getClient } from "@/sanity/lib/client";

async function getData() {
    const client = getClient();
    const data = await client.fetch(HOME_QUERY);
    return data;
  }
  
  export default async function  Profile() {
    const {profile} = await getData();
    console.log("Sanity data: ", profile)
  return (
    <div>
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
    </div>
  )
}
