"use client"
import Image from 'next/image';
import React from 'react'

interface SkillType {
  skill: string;
  icon: string;
}

export  function Skills({skills}: {skills: SkillType[]}) {
  return (
    <div>
        {/* Skills */}
        <div className="flex flex-row justify-between">
        <div className="w-full max-w-4xl bg-white/30 backdrop-blur-md p-4 rounded-2xl">
          <p className="flex justify-baseline text-4xl font-bold p-4">
          Skills
          </p>
          <div className='relative w-full overflow-hidden'>
            <div className="w-full flex justify-center gap-6 animate-marquee">
              {
                skills?.map((skill, index) => (
                  <div key={index} className='flex flex-col items-center min-w-[100px]'>
                    <Image
                      src={`${skill.icon}`}
                      alt={`${skill.skill} Icon`}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                    <p className='text-center text-sm font-medium mt-2 text-gray-700'>{skill.skill}</p>
                  </div>
                ))
              }
                  
            </div>
          </div>
        </div>
        <div className="w-full max-w-4xl bg-white/30 backdrop-blur-md p-4 rounded-2xl flex flex-row">
          <p className="flex justify-baseline text-4xl font-bold p-4">
            Tools
          </p>
          <div className='relative w-full overflow-hidden'>
            <p className="text-lg text-gray-700">
            Tools : Git Hub, vscode, tableau, Pentaho 
            </p>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Skills