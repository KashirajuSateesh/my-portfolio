"use client"
import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import Image from "next/image";

import { useState, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';

interface ProfileType {
  titleName: string;
  ProfilePic: string;
  roles: [{
    myrole: string;
  }];
  header: string;
  Resume: string;
}

export default function Profile({profile}: {profile: ProfileType}) {
    const titles = profile.roles.map(role => role.myrole);
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex +1) % titles.length);
      },3000);
      return()=>clearInterval(interval);
    }, [titles]);
  return (
    <div>
        <div className="relative overflow-hidden w-full flex flex-row p-4 gap-10">
          {/* Image */}
          <div id="home" className="w-full flex justify-center">
            <Image
              src={`${profile.ProfilePic}`}
              alt="Profile Picture"
              width={450}
              height={450}
              className="rounded-full aspect-square"
            />
          </div>
        <div className=" bg-white/30 backdrop-blur-md p-4 rounded-2xl flex-col h-full">
        {/* Name */}
          <div>
            <p className="flex justify-baseline text-4xl font-bold mb-8">Hello,<br/> I am {profile.titleName}</p>

            {/* Typewriter effect */}
            <p className="flex justify-baseline text-4xl font-bold mb-8">
              <Typewriter
                words={titles}//[titles[currentTitleIndex]]
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>

            {/* Role changing effect */}

            {/* <p className="flex justify-baseline text-4xl font-bold mb-8">
              {titles[currentTitleIndex]}
            </p> */}

            {/* main quote */}
            <h3 className="flex justify-center text-lg text-gray-800 py-4">
            {profile.header}
            </h3>
          </div>
          <div className="mt-auto py-2 text-justify">
            <a 
              href={profile.Resume}
              download
              className="inline-flex items-center space-x-2 text-2xl font-bold bg-gradient-to-br from-green-200 via-gray-400 to-gray-300 rounded-2xl max-w-full p-2"
            >
              <span >Download Resume</span>
              <IoDocumentTextOutline size={40}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
