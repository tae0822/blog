import { readFile } from "fs/promises";
import path from "path";

export type Project ={
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    thumbnail: string;
    hoverImage: string;
    gifImage: string;
    url: string;
    repository: string;
}

export async function getAllProjects(){
    const filepath = path.join(process.cwd(), 'data', 'projects.json')
    return readFile(filepath, 'utf-8')
    .then<Project[]>((res)=>(JSON.parse(res)))
    .then((posts)=> posts.sort((a,b)=> (a.date > b.date ? -1 : 1)))
}

export async function getProjectData(fileName: string){
    const filePath = path.join(process.cwd(), 'data', 'projects', `${fileName}.mdx`);
    const projects = await getAllProjects();
    const project = projects.find((p)=> p.path === fileName);

    if (!project) throw new Error(`Could not find a project matching ${fileName}`);

    const content = await readFile(filePath, 'utf-8');

    return {...project, content}
}