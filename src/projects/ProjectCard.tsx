import {Project} from "./Project";


interface ProjectCardProps {
    project: Project;
    onEdit: (project: Project) => void;
}
function ProjectCard({project, onEdit}: ProjectCardProps) {
    function handle_editClick(projectBeingEdited: Project) {
        onEdit(projectBeingEdited);
    }
    return (
        
        <div className = "card">
            <img src={project.imageUrl} alt={project.name} className = "card-img-top" />
            <section className = "card-body">
                <h5 className = "card-title">
                    <strong>{project.name}</strong>
                </h5>
                <p className = "card-text">{project.description}</p>
                <p>{project.budget.toLocaleString()}</p>
                <button onClick={() => handle_editClick(project)} className = "btn border-primary">
                    <span className="icon-edit"></span>
                    Edit
                </button>
            </section>
        </div>

    );
}

export default ProjectCard;