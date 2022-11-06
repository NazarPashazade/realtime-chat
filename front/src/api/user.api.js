import { API } from "./api"

export const users = ["Nazar", "Elmar", "Rufet", "Jeyhun"]

export const registerAPI = async (user) => {
    try {
        console.log({ url: process.env.REACT_APP_BACKEND_BASE_URL, API });
        const res = await API.post('auth/register', user)
        console.log({ res });

    } catch (err) {
        console.log(err)
    }
}



