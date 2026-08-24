import ProjectDetail from "./ProjectDetail";
import { useParams } from "react-router";
import { useProject } from "./projectHooks";

export default function ProjectPage() {
    const params = useParams();
    const id = Number(params.id);
    const { data: project, isPending, isError, error } = useProject(id);

    return (
        <div>
            {isError && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse"></span>
                                {error instanceof Error ? error.message : "Error loading project"}
                            </p>
                        </section>
                    </div>
                </div>
            )}
            {isPending && (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            )}
            {project && <ProjectDetail project={project} />}
        </div>
    );
}