import { Project } from "./Project";


interface ProjectListProps {
  projects: Project[];
}

function ProjectList({projects}: ProjectListProps) {
    return (
        <ul className = "row">
            {projects.map((project) => (
                <li key = {project.id} className = "cols-sm"> 
                    <div className = "card">
                        <img src={project.imageUrl} alt={project.name} className = "card-img-top" />
                        <section className = "card-body">
                            <h5 className = "card-title">
                                <strong>{project.name}</strong>
                            </h5>
                            <p className = "card-text">{project.description}</p>
                            <p>{project.budget.toLocaleString()}</p>
                        </section>
                    </div>
                </li>
            ))}
        </ul> 
    );
}

export default ProjectList;