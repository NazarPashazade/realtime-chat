import React, { useContext } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { PostContext } from '../contexts/PostContext';

function Dashboard() {

    const { posts } = useContext(PostContext)

    // /:username
    const { username } = useParams()

    // /?country=AZ
    const [searchParam, setSerachParam] = useSearchParams()

    const country = searchParam.get('country')


    return (
        <>
            <h1>Welcome {username} you have {posts?.length} posts in {country}</h1>
        </>
    )
}

export default Dashboard;
