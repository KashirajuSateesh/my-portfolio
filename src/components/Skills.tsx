"use client"
import Image from 'next/image';
import React from 'react';
import { useRef } from "react";
import { useCarouselAnimation } from "./hooks/useAnimation";


interface SkillType {
  skill: string;
  icon: string;
}



export  function Skills({skills}: {skills: SkillType[]}) {
  const skillsRef = useRef<HTMLDivElement>(null);
  useCarouselAnimation(skillsRef, { duration: 30, ease: "linear", repeat: -1 });

  // Duplicate skills for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills];
  return (
    <div>
        {/* Skills */}
        <div className="w-full  bg-white/30 backdrop-blur-md p-4 rounded-2xl">
          <p className="flex justify-baseline text-4xl font-bold p-4">
          Skills
          </p>
          <div className='relative w-full overflow-hidden'>
            <div ref={skillsRef} className="w-full flex justify-center gap-10">
              {
                duplicatedSkills.length>0 ? (
                  duplicatedSkills.map((skill, index) => (
                  <div key={index} className='flex flex-col items-center min-w-[100px]'>
                    <Image
                      src={skill.icon}
                      alt={`${skill.skill} Icon`}
                      width={100}
                      height={100}
                      className="object-contain aspect-square"
                    />
                    <p className='text-center text-sm font-medium mt-2 text-gray-700'>{skill.skill}</p>
                  </div>
                ))
              ):(
                <p className="text-center text-gray-500">No skills available</p>
              )
              }  
            </div>
          </div>
        </div>
        
        </div>
  );
}

export default Skills