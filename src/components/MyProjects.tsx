import { getAllProjects, Project } from '@/service/projects'
import React from 'react'
import ProjectCard from './ProjectCard';

async function MyProjects() {
  const projects = await getAllProjects();

  return (
    <section className='my-4'>
          <h2 className='text-2xl font-bold my-2 '>My Projects</h2>
          <div className="w-36 border-2 mb-4"/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project: Project, index)=> (
                <ProjectCard project={project} key={index}/>
              ))}
          </div>
        </section>
  )
}

export default MyProjects