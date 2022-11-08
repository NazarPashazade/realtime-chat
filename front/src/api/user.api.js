import { toast } from "react-toastify";
import { API } from "./api"

export const users = ["Nazar", "Elmar", "Rufet", "Jeyhun"]

export const userList = [
    {
        "username": "Azar Pasha",
        "email": null,
        "id": "user_63ea15931d8541a3bd35e5b1f09087dc",
        "avatarURL": "https://randomuser.me/api/portraits/men/1.jpg",
        "updated": "2020-09-23T09:23:34.598494Z"
    },
    {
        "username": "Nazar Pasha",
        "email": null,
        "id": "user_63ea15931d8541a3bd35e5b1f09087dc",
        "avatarURL": "https://randomuser.me/api/portraits/women/1.jpg",
        "updated": "2020-09-23T09:23:34.598494Z"
    },
    {
        "username": "Xazar Pasha",
        "email": null,
        "id": "user_63ea15931d8541a3bd35e5b1f09087dc",
        "avatarURL": "https://randomuser.me/api/portraits/men/2.jpg",
        "updated": "2020-09-23T09:23:34.598494Z"
    },
    {
        "username": "Hasan Aliyev",
        "email": null,
        "id": "user_63ea15931d8541a3bd35e5b1f09087dc",
        "avatarURL": "https://randomuser.me/api/portraits/men/3.jpg",
        "updated": "2020-09-23T09:23:34.598494Z"
    },
    {
        "username": "Ali Aliyev",
        "email": null,
        "id": "user_63ea15931d8541a3bd35e5b1f09087dc",
        "avatarURL": "",
        "updated": "2020-09-23T09:23:34.598494Z"
    }
]


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



