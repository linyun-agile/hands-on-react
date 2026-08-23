import { SyntheticEvent } from "react";
import { Project } from "./Project";

interface ProjectFormProps{
    onSave: (project: Project) => void;
    onCancel: () => void;
}

function ProjectForm({onCancel, onSave}: ProjectFormProps){
     function handle_submit(event: SyntheticEvent) {
        event.preventDefault();
        onSave(new Project({ name: 'Updated Project' }));
    }               
    return (
        <form className="input-group vertical" onSubmit={handle_submit}>
            <label>Project Name</label>
            <input></input>
            <label>Project Description</label>
            <textarea></textarea>
            <label>Project Budget</label>
            <input type = "number"></input>
            <label>Active?</label>
            <input type="checkbox"></input>
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