import { getClient } from '@/sanity/lib/client'
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import React from 'react'
import ProjectCard from '@/components/ProjectCard'

async function getData() {
  const client = getClient();
  const data = await client.fetch(PROJECTS_QUERY);
  return data;
}

async function Projects() {
  const{project} = await getData();

  return (
    <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl">
      <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.map((proj: any) => (
          <ProjectCard key={proj._id} proj={proj} /> // ✅ Use component
        ))}
      </div>
    </div>
  );
}

export default Projects