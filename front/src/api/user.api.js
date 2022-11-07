import { API } from "./api"

export const users = ["Nazar", "Elmar", "Rufet", "Jeyhun"]

export const registerAPI = async (user) => {
    try {
        console.log({user});
        const res = await API.post('auth/register', user)
        console.log({ res });

    } catch (err) {
        console.log(err)
    }
}

export const loginAPI = async (user) => {
    try {
        const res = await API.post('auth/login', user)
        console.log({ res });

    } catch (err) {
        console.log(err)
    }
}



