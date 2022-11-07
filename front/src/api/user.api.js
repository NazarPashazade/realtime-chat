import { toast } from "react-toastify";
import { API } from "./api"

export const users = ["Nazar", "Elmar", "Rufet", "Jeyhun"]

export const registerAPI = async (user) => {
    try {
        const res = await API.post('auth/register', user)
        toast.success("Succesfully registrated")
    } catch (err) {
        toast.error("Error...")
        console.log(err)
    }
}

export const loginAPI = async (user) => {
    try {
        const res = await API.post('auth/login', user)
        console.log({ res });
        toast.success("Welcome to board")

    } catch (err) {
        toast.error("Invalid credentials")
        console.log(err)
    }
}



