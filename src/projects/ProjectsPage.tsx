import type { Project } from "./Project";
import ProjectList from "./ProjectList";
import { useProjects } from "./projectHooks";



function ProjectsPage(){
    const {projects, currentPage, setCurrentPage, loading, error, saveProject, savingError} = useProjects();

    const handleMoreClick = ()=>setCurrentPage((currentPage) => currentPage + 1);
    
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
        <ProjectList projects={projects} onSave = {saveProject}/>
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
        {savingError &&(
            <div className="row">
                <div className="card">
                    <div className="section">
                        <p>
                            <span className="icon-alert"></span>
                            {savingError}
                        </p>
                    </div>
                </div>
            </div>
        )}
    </>
    )   
};

export default ProjectsPage;