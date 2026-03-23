import { Project } from '@/service/projects';
import ProjectCard from './ProjectCard';

type Props = { projects: Project[] };

export default function ProjectsGrid({ projects }: Props) {
  return (
    <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {projects.map((project) => (
        <li key={project.path}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
