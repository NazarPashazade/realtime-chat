import { useContext } from 'react'
import { createContext, useState } from 'react'

export const PostContext = createContext()

export default function PostProvider({ children }) {

    const [posts, setPosts] = useState([])

    const addPost = (newPost) => {
        setPosts(postList => [...postList, newPost])
    }

    const deletePost = (id) => {
        setPosts(postList => postList.filter(p => p.id != id))
    }

    return (
        <PostContext.Provider value={{ posts, setPosts, addPost, deletePost }}>
            {children}
        </PostContext.Provider>
    )

}


 