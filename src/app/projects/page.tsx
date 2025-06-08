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
  console.log(data.project)
  return data;
}

export default async function Home() {
  const {project} = await getData();
  return (

    <div className="min-h-screen bg-gradient-to-br from-green-200 via-gray-300 to-gray-400 pt-24 px-6">

      <div><Navbar/></div>

      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-gray-700">This is where you will get to know me better.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.map((proj: any) => (
          <ProjectCard key={proj._id} proj={proj} /> // ✅ Use component
        ))}
      </div>
      
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.map((proj:any)=>(
          <div>
            <Link 
              key={proj.id}
              href={`/projects/${proj.slug?.current}`} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className='bg-white rounded-4xl'>
                  {proj.imgUrl && (
                    <Image
                      src={proj.imgUrl}
                      alt={proj.title}
                      width={400}
                      height={400}
                      className="object-cover w-full h-60 rounded-4xl"
                    />
                  )}
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{proj.title}</h2>
                    <p className="text-sm text-gray-600 line-clamp-2">{proj.description}</p>
                  </div>
                </div>
                
            </Link>
          </div>
        ))}
      </div> */}
    </div>
  )
}
