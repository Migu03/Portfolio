import instance from "./config";

export const getAllSm = () => {
    return instance.get("/social-media");
};

export const getSm = (id) => {
    return instance.get(`/social-media/${id}`);
};

export const addSm = (item) => {
    return instance.post("/social-media", item);
};

export const updateSm = (item) => {
    return instance.put(`/social-media/${item.id}`, item);
};

export const deleteSm = (id) => {
    return instance.delete(`/social-media/${id}`);
};