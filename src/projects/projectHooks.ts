import { useEffect, useState } from "react";
import { Project } from "./Project";
import { projectAPI } from "./projectAPI";

export function useProjects(){
    const[projects, setProjects] = useState<Project[]>([]);
    const[saving, setSaving] = useState(false);
    const[currentPage, setCurrentPage] = useState(1);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState();
    const[savingError, setSavingError] = useState();



    useEffect(()=>{
        setLoading(true);
        projectAPI.get(currentPage)
        .then((data)=>{
            if(currentPage === 1){
                setProjects(data)
            }else{
                setProjects((projects)=> [...projects, ...data])
            }
            setLoading(false);
        })
        .catch((e)=>{
            setLoading(false);
            setError(e.message);
        })
    },[currentPage]);

    const saveProject = (project: Project)=>{
        setSaving(true);
        projectAPI.put(project)
        .then((new_project) =>{
            let updatedProjects = projects.map((p) =>{
                if(p.id === new_project.id){
                    return new_project;
                }
                return p;
            })
            setProjects(updatedProjects);
        })
        .catch((e)=>{
            setSavingError(e.message);
        })
        .finally(()=>setSaving(false));
    }

    return {
        projects,
        currentPage,
        setCurrentPage,
        loading,
        error,
        saving,
        savingError,
        saveProject,
    }
}