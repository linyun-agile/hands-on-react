import { SyntheticEvent } from "react";
import { Project } from "./Project";
import { useState } from "react";

interface ProjectFormProps{
    project: Project
    onSave: (project: Project) => void;
    onCancel: () => void;
}

function ProjectForm({onCancel, onSave, project: initialProject}: ProjectFormProps){
    const [project, setProject] = useState(initialProject);
     function handle_submit(event: SyntheticEvent) {
        event.preventDefault();
        onSave(project);
    }               

    function handle_change(event: any){
        const {name, type, value, checked} = event.target;
        let updated_value = type === "checkbox" 
                            ? checked :  type === "number"
                            ? Number(value) : value;


        setProject((p) => {return new Project({ ...p, ...{[name]: updated_value}})});
    }
    return (
        <form className="input-group vertical" onSubmit={handle_submit}>
            <label>Project Name</label>
            <input type="text"  name="name" value={project.name} onChange={handle_change}></input>
            <label>Project Description</label>
            <textarea name="description" value={project.description} onChange={handle_change}></textarea>
            <label>Project Budget</label>
            <input type = "number" name="budget"value={project.budget} onChange={handle_change}></input>
            <label>Active?</label>
            <input type="checkbox" name="isActive" checked={project.isActive} onChange={handle_change}></input>
            <div className="input-group">
                <button className="primary bordered medium">
                    Save
                </button>
                <button className="bordered medium" onClick={onCancel}>
                    Cancel
                </button>
            </div>

        </form>
    )
}

export default ProjectForm;