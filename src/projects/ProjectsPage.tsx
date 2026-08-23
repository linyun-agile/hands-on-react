import { MOCK_PROJECTS } from "./MockProjects";
import type { Project } from "./Project";
import ProjectList from "./ProjectList";

function ProjectsPage(){
    const saveForm = (project: Project) => {
        console.log("Saving project:", project);
    }
    return(
    <>
        <h1> Projects </h1>
        <ProjectList projects={MOCK_PROJECTS} onSave = {saveForm}/>
    </>
    )   
};

export default ProjectsPage;