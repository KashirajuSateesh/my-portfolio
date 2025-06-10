import React from 'react'
import { getClient } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard'
import Contact from '@/components/Contact';
import { FOOTER_QUERY } from '@/sanity/lib/queries';


export const revalidate = 3600;

async function getData() {
  const client = getClient();
  const [data, footer] = await Promise.all([client.fetch(PROJECTS_QUERY), client.fetch(FOOTER_QUERY)]);
  return {...data, footer};
}

export default async function Home() {
  const {project, banner, footer} = await getData();
  return (
    <div>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-200 via-gray-300 to-gray-400">

        <Navbar/>

        <div className='w-full pt-16'>
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
              <h1 className="text-5xl text-amber-50 font-bold">Projects</h1>
              <p className="text-xl text-amber-50 mt-2">This is where you will get to know me better.</p>
            </div>
          </div>

        
          <div className="px-4 sm:px-6 lg:px-10">
            <div className="grid gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {project.map((proj: any) => (
              <ProjectCard key={proj._id} proj={proj} /> // ✅ Use component
            ))}
            </div>
          </div>
        </div>

        {/* ✅ Footer Section */}
        <div className="max-w-full">
          <Contact footer={footer}/>
        </div>
        
      </div>
    </div>
  )
}
