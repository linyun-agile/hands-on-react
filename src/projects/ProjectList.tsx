import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";


interface ProjectListProps {
  projects: Project[];
}

function ProjectList({projects}: ProjectListProps) {
    const handleEdit = (project: Project) => {
        console.log(`Editing project: ${project.name}`);
    }
    return (
        <ul className = "row">
            {projects.map((project) => (
                <li key = {project.id}>
                    <ProjectCard project={project} onEdit={handleEdit} />
                    <ProjectForm />
                </li>
            ))}
        </ul> 
    );
}

export default ProjectList;