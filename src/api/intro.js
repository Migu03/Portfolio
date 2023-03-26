import instance from "./config";

export const getIntroAll = () => {
    return instance.get("/intro");
};

export const getIntro = (id) => {
    return instance.get(`/intro/${id}`);
}

export const addIntro = (intro) => {
    return instance.post("/intro", intro);
};

export const updateIntro = (intro) => {
    return instance.put(`/intro/${intro.id}`, intro);
};
