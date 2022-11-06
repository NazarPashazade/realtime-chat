import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    // same with "Link" but you can write conditions with navigate
    const navigate = useNavigate()


    return (
        <>
            < h1 > Hello from Contact</h1 >
            <button onClick={() => navigate('/dashboard/Nazar/?country=Azerbaijan')}>back to Dashboard</button>

        </>
    )


}

export default Login;
