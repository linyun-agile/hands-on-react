import type { ChangeEvent, SyntheticEvent } from 'react';
import { Project } from "./Project";
import { useState } from "react";
import { useSaveProject } from './projectHooks';

interface ProjectFormProps {
    project: Project;
    onCancel: () => void;
}

interface FormData {
  name: string;
  description: string;
  budget: string;
  isActive: boolean;
}

function ProjectForm({ onCancel, project: initialProject }: ProjectFormProps) {
    const [project, setProject] = useState<FormData>({
        name: initialProject.name,
        description: initialProject.description,
        budget: String(initialProject.budget),
        isActive: initialProject.isActive,
    });
    const [error, setError] = useState({ name: "", description: "", budget: "" });
    const { mutate: saveProject, isPending } = useSaveProject();

    function validate(projectToValidate: FormData) {
        const errors = { name: "", description: "", budget: "" };
        if (projectToValidate.name.length === 0) {
            errors.name = "Name is required";
        }
        if (projectToValidate.description.length === 0) {
            errors.description = "Description is required";
        }
        if (Number(projectToValidate.budget) <= 0) {
            errors.budget = "Budget must be more than $0.";
        }
        setError(errors);
    }
    
    function isValid() {
        return error.name.length === 0 &&
                error.description.length === 0 &&
                error.budget.length === 0;
    }

    function handle_submit(event: SyntheticEvent) {
        event.preventDefault();
        if (!isValid()) { return; }
        const savedProject = Object.assign(
            new Project(),
            initialProject,
            project,
            {
                budget: Number(project.budget)
            }
        );
        saveProject(savedProject, {
            onSuccess: () => {
                onCancel();
            }
        });
    }

    function handle_change(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, type, value } = event.target;
        const checked = (event.target as HTMLInputElement).checked;
        const updated_value = type === "checkbox" 
                            ? checked : type === "number" ? 
                            String(value) : value;

        const updated_project = { ...project, [name]: updated_value };
        setProject(updated_project);
        validate(updated_project);
    }

    return (
        <form className="input-group vertical" onSubmit={handle_submit}>
            {isPending && <span className='toast'> Saving... </span>}
            <label>Project Name</label>
            <input type="text" name="name" value={project.name} onChange={handle_change} />
            {error.name.length > 0 && <span className="error">{error.name}</span>}
            <label>Project Description</label>
            <textarea name="description" value={project.description} onChange={handle_change} />
            {error.description.length > 0 && <span className="error">{error.description}</span>}
            <label>Project Budget</label>
            <input type="number" name="budget" value={project.budget} onChange={handle_change} />
            {error.budget.length > 0 && <span className="error">{error.budget}</span>}
            <label>Active?</label>
            <input type="checkbox" name="isActive" checked={project.isActive} onChange={handle_change} />
            <div className="input-group">
                <button type="submit" className="primary bordered medium" disabled={isPending}>
                    Save
                </button>
                <button type="button" className="bordered medium" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default ProjectForm;