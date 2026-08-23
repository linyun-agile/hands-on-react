import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";


interface ProjectListProps {
  projects: Project[];
}

function ProjectList({projects}: ProjectListProps) {
    return (
        <ul className = "row">
            {projects.map((project) => (
                <li key = {project.id}>
                    <ProjectCard project={project} />
                    <ProjectForm />
                </li>
            ))}
        </ul> 
    );
}

export default ProjectList;