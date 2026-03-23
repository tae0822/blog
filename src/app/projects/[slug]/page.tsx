import ProjectHero from '@/components/mdx/ProjectHero';
import { getProjectData } from '@/service/projects';
import { MDXRemote } from 'next-mdx-remote/rsc';
import dynamic from 'next/dynamic';
import React from 'react'

type Props ={
    params: {
        slug: string;
    }
}
// Client Components dynamic import

const ClientImageGrid = dynamic(() => import('@/components/mdx/ImageGrid'), { ssr: false });
const ClientBadgeList = dynamic(() => import('@/components/UI/BadgeList'), { ssr: false });

const mdxComponents = {
  ImageGrid: ClientImageGrid,
  BadgeList: ClientBadgeList,
};

async function ProjectPage({params}: Props) {
    const {slug} = await params;
    const project = await getProjectData(slug);
    const {title, description, gifImage, content, url, repository} = project;

  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4 dark:text-black w-full'>
        <ProjectHero 
        image={gifImage}
        title={title}
        description={description}
        url={url}
        repository={repository}
        />
        {content &&
        <div className="prose prose-slate lg:prose-xl dark:prose-invert max-w-none pl-6 border-l-2 mt-8
        flex flex-col items-center text-center px-4 pr-4 border-none w-full
        md:items-start md:text-left md:pl-6 md:border-l-2 md:px-0
        ">
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={content} components={mdxComponents}/>
        </div>
        }
    </article>
  )
}

export default ProjectPage