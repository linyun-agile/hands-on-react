import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { useState } from "react";


interface ProjectListProps {
  projects: Project[];
}

function ProjectList({projects}: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState<Project | null>(null);
    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    }
    const handleCancel = () => {
        setProjectBeingEdited(null);
    }

    return (
        <ul className="row">
            {projects.map((project) => (
                <li key={project.id}>
                    {
                    project === projectBeingEdited ? (

                        <ProjectForm onCancel={handleCancel} project={project} />
                    ) : (
                        <ProjectCard project={project} onEdit={handleEdit} />
                    )
                    }
                </li>
            ))}
        </ul> 
    );
}

export default ProjectList;