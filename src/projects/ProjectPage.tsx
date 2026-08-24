import { Project } from "./Project"
import ProjectDetail from "./ProjectDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router";
import { projectAPI } from "./projectAPI";

export default function ProjectPage(){
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState<Project | null>(null);
    const [error, setError] = useState<string | undefined>(undefined);
    const params = useParams();
    const id = Number(params.id);

    useEffect(()=>{
        if (id <= 0) {
            setError("Invalid project id");
            return;
        }
        setLoading(true);
        projectAPI
        .find(id)
        .then((data) => {
            setProject(data);
            setLoading(false);
        })
        .catch((e) => {
            setError(e.message);
            setLoading(false);
        });
    }, [id]);


    return (
        <div>
            {error && (
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
            )}
            {loading && (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            )}
            { project && <ProjectDetail project={project}></ProjectDetail>}
        </div>
    )
}