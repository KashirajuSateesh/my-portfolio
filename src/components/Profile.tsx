"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

interface ProfileType {
  titleName: string;
  ProfilePic: string;
  roles: { myrole: string }[];
  header: string;
  Resume: string;
}

export default function Profile({ profile }: { profile: ProfileType }) {
  const titles = profile.roles.map((role) => role.myrole);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles]);

  return (
    <div className="w-full p-6 lg:p-12 bg-white/30 backdrop-blur-md rounded-2xl">
      <div className="flex flex-wrap gap-16 items-start">
        
        {/* Profile Picture (larger size) */}
        <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
          <Image
            src={profile.ProfilePic}
            alt="Profile Picture"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 min-w-[250px] pt-4">
          <p className="text-3xl sm:text-4xl font-bold mb-4">
            Hello,<br /> I am {profile.titleName}
          </p>

          <p className="text-2xl font-semibold text-gray-700 mb-4">
            <Typewriter
              words={titles}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <h3 className="text-base sm:text-lg text-gray-800 mb-6">
            {profile.header}
          </h3>

          <a
            href={profile.Resume}
            download
            className="inline-flex items-center space-x-3 text-lg font-semibold bg-gradient-to-br from-green-200 via-gray-400 to-gray-300 rounded-xl px-4 py-2"
          >
            <MdOutlineFileDownload size={24} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
