import {Project} from "./Project";


interface ProjectCardProps {
    project: Project;
}
function ProjectCard({project}: ProjectCardProps) {
    return (
        <li className = "col-sm">
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
    );
}

export default ProjectCard;