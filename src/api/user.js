import instance from "./config";
// dung duong dan moi dc
const signUp = (user) =>{
    const url = "/signup"
    return instance.post(url,user)
}
const login = (user) =>{
    const url = "/signin"
    return instance.post(url,user)
}
export{signUp, login}