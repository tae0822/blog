import Image from 'next/image';
import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

type Props ={
    image: string;
    title: string;
    description: string;
    url: string;
    repository: string;
}

function ProjectHero({image, title, description, url, repository}: Props) {
  return (
    <section>
        <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-10 dark:border-slate-700">
            <Image 
            src={image} 
            alt={`${title} screenshot`}
            fill
            className="object-contain"
            priority
            />
        </div>
        <div className="pl-6 border-l-2">
          
        <h1 className="text-4xl md:text-5xl font-black mb-3 text-slate-900 dark:text-white max-w-2xl">
            {title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
            {description}
        </p>

      <div className="flex gap-4">
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-bold hover:bg-sky-600 transition hover:scale-105"
          >
            Live Demo <FaExternalLinkAlt size={14} />
          </a>
        )}
        {repository && (
          <a 
            href={repository} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-slate-300 dark:border-slate-600 px-6 py-3 rounded-full font-bold dark:bg-slate-100 hover:bg-slate-100 dark:hover:bg-slate-300 transition hover:scale-105"
          >
            Github <FaGithub size={18} />
          </a>
        )}
        </div>
      </div>
    </section>
  )
}

export default ProjectHero