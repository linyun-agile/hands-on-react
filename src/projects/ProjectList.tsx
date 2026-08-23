import { Project } from "./Project";
import ProjectCard from "./ProjectCard";


interface ProjectListProps {
  projects: Project[];
}

function ProjectList({projects}: ProjectListProps) {
    return (
        <ul className = "row">
            {projects.map((project) => (
                <div key = {project.id}>
                    <ProjectCard project={project} />
                </div>
            ))}
        </ul> 
    );
}

export default ProjectList;