
interface ProjectFormProps{
    onCancel: () => void;
}

function ProjectForm({onCancel}: ProjectFormProps){
    return (
        <form className="input-group vertical">
            <label>Project Name</label>
            <input></input>
            <label>Project Description</label>
            <textarea></textarea>
            <label>Project Budget</label>
            <input type = "number"></input>
            <label>Active?</label>
            <input type="checkbox"></input>
            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <button className="bordered medium" onClick={onCancel}>
                    Cancel
                </button>
            </div>

        </form>
    )
}

export default ProjectForm;