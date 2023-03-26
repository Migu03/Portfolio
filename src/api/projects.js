import instance from "./config";
const getProjects = ()=>{
    return instance.get('/projects');
}
const addProject = (project)=>{
    return instance.post('/projects',project)
}
const deleteProject = (id)=>{
    return instance.delete(`/projects/${id}`)
}
const updateProject = (project)=>{
    return instance.put(`/projects/${project.id}`,project)
}
const getProject = (id)=>{
    return instance.get(`/projects/${id}`)
}
const searchProject = (dataForm) => {
    return instance.get(`/projects?q=${dataForm}`)
}
export{getProjects,addProject,deleteProject,updateProject,getProject,searchProject}