import { MOCK_PROJECTS } from "./MockProjects";
import type { Project } from "./Project";
import ProjectList from "./ProjectList";
import { useState } from "react";

function ProjectsPage(){
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
    const saveForm = (project: Project) => {
        let updatedProjects = projects.map((p) => p.id === project.id ? project : p);
        setProjects(updatedProjects);
    }
    return(
    <>
        <h1> Projects </h1>
        <ProjectList projects={projects} onSave = {saveForm}/>
    </>
    )   
};

export default ProjectsPage;