import instance from "./config";
const getCategories = ()=>{
    return instance.get('/categories');
}
const addCategory = (category)=>{
    return instance.post('/categories',category)
}
const deleteCategory = (id)=>{
    return instance.delete(`/categories/${id}`)
}
const updateCategory = (category)=>{
    return instance.put(`/categories/${category.id}`,category)
}
const getCategory = (id)=>{
    return instance.get(`/categories/${id}`)
}
const Relationships = (id) => {
    const url = `/categories/${id}?_embed=projects`;
    return instance.get(url);
}
export{getCategories,addCategory,deleteCategory,updateCategory,getCategory,Relationships}