import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { useState } from "react";


interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({projects, onSave}: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState<Project | null>(null);
    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    }
    const handleCancel = () => {
        setProjectBeingEdited({} as Project);
    }

    return (
        <ul className = "row">
            {projects.map((project) => (
                <li key = {project.id}>
                    {
                    project == projectBeingEdited ? (
                        <ProjectForm onCancel={handleCancel} onSave={onSave} />
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