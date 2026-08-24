import { Project } from "./Project";

interface ProjectDetailProps{
    project: Project;
};

export default function ProjectDetail({project}: ProjectDetailProps){
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                    <img src={project.imageUrl} alt={project.name}></img>
                    <section>
                        <h3>
                            <strong> {project.name} </strong>
                        </h3>
                        <p>{project.description}</p>
                        <p>Budget : {project.budget}</p>
                        <p>Signed: {project.contractSignedOn.toLocaleDateString()}</p>
                        <p>
                        <mark className="active">
                            {' '}
                            {project.isActive ? 'active' : 'inactive'}
                        </mark>
                        </p>
                    </section>
                </div>
            </div>
        </div>

    );
};