import instance from "./config";

export const getSkills = () => {
    return instance.get("/skills");
};

export const getSkill = (id) => {
    return instance.get(`/skills/${id}`);
};

export const addSkill = (skill) => {
    return instance.post("/skills", skill);
};

export const updateSkill = (skill) => {
    return instance.put(`/skills/${skill.id}`, skill);
};

export const deleteSkill = (id) => {
    return instance.delete(`/skills/${id}`);
};

// export const Relationship = () => {
//     return instance.get(`/technologies/${id}?_embed=projects`)
// }
