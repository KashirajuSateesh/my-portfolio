"use client"
import Image from 'next/image';
import React from 'react';
import { useRef } from "react";
import { useCarouselAnimation } from "./hooks/useAnimation";

interface ToolType{
  tool: string;
  icon: string;
}

interface SkillType {
  skill: string;
  icon: string;
}



export  function Skills({skills, tools}: {skills: SkillType[]; tools: ToolType[]}) {
  const skillsRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  useCarouselAnimation(skillsRef, { duration: 30, ease: "linear", repeat: -1 });
  useCarouselAnimation(toolsRef, { duration: 30, ease: "linear", repeat: -1 });

  // Duplicate skills for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills];
  const duplicatedTools = [...tools, ...tools];
  return (
    <div>
        {/* Skills */}
        <div className="flex flex-row justify-between">
        <div className="w-full max-w-4xl bg-white/30 backdrop-blur-md p-4 rounded-2xl">
          <p className="flex justify-baseline text-4xl font-bold p-4">
          Skills
          </p>
          <div className='relative w-full overflow-hidden'>
            <div ref={skillsRef} className="w-full flex justify-center gap-6">
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
        <div className="w-full max-w-4xl bg-white/30 backdrop-blur-md p-4 rounded-2xl">
          <p className="flex justify-baseline text-4xl font-bold p-4">
            Tools
          </p>
          <div className='relative w-full overflow-hidden'>
          <div ref={toolsRef} className="w-full flex justify-center gap-6 ">
            {
            tools?.length ? (
            tools?.map((tool, index) => (
              <div key={index} className='flex flex-col items-center min-w-[100px]'>
                <Image
                src={`${tool.icon}`}
                alt={`${tool.tool} Icon`}
                width={100}
                height={100}
                className="object-contain aspect-square"
                />
                <p className='text-center text-sm font-medium mt-2 text-gray-700'>{tool.tool}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No tools available</p>
          )
            }
          </div>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Skills