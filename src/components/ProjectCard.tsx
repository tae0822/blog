import { Project } from '@/service/projects'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import BadgeList from './UI/BadgeList';

type Props ={
    project : Project;
}

function ProjectCard({project}: Props) {
    const {title, description, date, category, path, thumbnail, hoverImage} = project;

  return (
    <Link href={`/projects/${path}`}>
        <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl hover:scale-95 transition-all dark:bg-slate-800 dark:border-gray-700 dark:hover:bg-slate-700">
            <div className="relative w-full aspect-[5/4] group">
                <Image className="object-cover transition-opacity duration-300 group-hover:opacity-0" fill src={thumbnail} alt={title} sizes="(max-width: 768px) 100vw, 50vw" />
                <Image className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100" fill src={hoverImage} alt={title} sizes="(max-width: 768px) 100vw, 50vw"/>
            </div>
            <div className="flex flex-col items-center p-4 px-10 border-t-2">
                <time className="self-end  text-gray-700 dark:text-gray-400">{date.toString()}</time>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-lg text-center truncate w-full mb-2">{description}</p>
           <BadgeList 
           items={category}
           size='small'
           />
            </div>
        </article>
    </Link>
  )
}

export default ProjectCard