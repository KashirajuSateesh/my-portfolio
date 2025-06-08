import Link from 'next/link'
import React from 'react'

import { getClient } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard'


export const revalidate = 3600;

async function getData() {
  const client = getClient();
  const data = await client.fetch(PROJECTS_QUERY);
  return data;
}

export default async function Home() {
  const {project, banner} = await getData();
  console.log("Projects Page", banner)
  return (

    <div className="min-h-screen bg-gradient-to-br from-green-200 via-gray-300 to-gray-400 pt-24 px-6">

      <div><Navbar/></div>

      <div
        className="relative w-full h-[300px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black/20 w-full h-full absolute top-0 left-0 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Projects</h1>
          <p className="text-xl mt-2">This is where you will get to know me better.</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.map((proj: any) => (
          <ProjectCard key={proj._id} proj={proj} /> // ✅ Use component
        ))}
      </div>
    </div>
  )
}
