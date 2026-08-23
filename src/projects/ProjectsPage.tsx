import type { Project } from "./Project";
import { projectAPI } from "./projectAPI";
import ProjectList from "./ProjectList";
import { useEffect, useState } from "react";



function ProjectsPage(){
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(1);

    const handleMoreClick = ()=>setCurrentPage((currentPage) => currentPage + 1);
    

    useEffect(()=>{
        setLoading(true);
        projectAPI
        .get(currentPage)
        .then((data) => {
            setError(undefined);
            setLoading(false);
            if(currentPage === 1){
                setProjects(data);
            }else{
                setProjects((projects) => [...projects, ...data]);
            }
            
        })
        .catch(e => {
            setLoading(false);
            setError(e.message);
        })
    }, [currentPage]);



    const saveForm = (project: Project) => {
        let updatedProjects = projects.map((p) => p.id === project.id ? project : p);
        setProjects(updatedProjects);
    }
    return(
    <>
        <h1> Projects </h1>
        {
            error && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse"></span>
                                {error}
                            </p>
                        </section>
                    </div>
                </div>
            )
        }
        <ProjectList projects={projects} onSave = {saveForm}/>
        {
            ! error && !loading && (
                <div className="row">
                    <div className="col-sm-12">
                        <div className="button-group fluid">
                            <button onClick={handleMoreClick}> 
                                More 
                            </button>
                        </div>
                    </div>
                
                </div>
            )
        }
        {
            loading && (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            )
        }
    </>
    )   
};

export default ProjectsPage;