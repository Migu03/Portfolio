import instance from "./config";

export const getTechnologies = () => {
    return instance.get("/technologies");
};

export const getTechnology = (id) => {
    return instance.get(`/technologies/${id}`);
};

export const addTechnology = (technology) => {
    return instance.post("/technologies", technology);
};

export const updateTechnology = (technology) => {
    return instance.put(`/technologies/${technology.id}`, technology);
};

export const deleteTechnology = (id) => {
    return instance.delete(`/technologies/${id}`);
};