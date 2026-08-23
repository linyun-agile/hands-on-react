import type { SyntheticEvent } from 'react';
import { Project } from "./Project";
import { useState } from "react";

interface ProjectFormProps{
    project: Project
    onSave: (project: Project) => void;
    onCancel: () => void;
}

interface FormData{
  name: string;
  description: string;
  budget: string;
  isActive: boolean;
}

function ProjectForm({onCancel, onSave, project: initialProject}: ProjectFormProps){
    const [project, setProject] = useState<FormData>({
        name: initialProject.name,
        description: initialProject.description,
        budget: String(initialProject.budget),
        isActive: initialProject.isActive,
    });
    const [error, setError] = useState({name: "", description: "", budget: ""});
    function handle_submit(event: SyntheticEvent) {
        event.preventDefault();
        if(!isValid()){return;}
        const savedProject = Object.assign(
            new Project(),
            initialProject,
            project,
            {
                budget: Number(project.budget)
            }
        );
        onSave(savedProject);
    }   

    function validate(project: FormData){
        let errors = {name: "", description: "", budget: ""};
        if(project.name.length === 0){
            errors.name = "Name is required";
        }
        if(project.description.length === 0){
            errors.description = "Description is required";
        }
        if(Number(project.budget) <= 0){
            errors.budget = "Budget must be more than $0.";
        }
        setError(errors);
    }
    
    function isValid(){
        return error.name.length === 0 &&
                error.description.length === 0 &&
                error.budget.length === 0;
    }

    function handle_change(event: any){
        const {name, type, value, checked} = event.target;
        let updated_value = type === "checkbox" 
                            ? checked : type === "number" ? 
                            String(value) : value;

        let updated_project = {...project, ...{[name]: updated_value}};
        setProject(updated_project);
        validate(updated_project);
    }
    return (
        <form className="input-group vertical" onSubmit={handle_submit}>
            <label>Project Name</label>
            <input type="text"  name="name" value={project.name} onChange={handle_change}></input>
            {error.name.length > 0 && <span className="error">{error.name}</span>}
            <label>Project Description</label>
            <textarea name="description" value={project.description} onChange={handle_change}></textarea>
            {error.description.length > 0 && <span className="error">{error.description}</span>}
            <label>Project Budget</label>
            <input type = "number" name="budget"value={project.budget} onChange={handle_change}></input>
            {error.budget.length > 0 && <span className="error">{error.budget}</span>}
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