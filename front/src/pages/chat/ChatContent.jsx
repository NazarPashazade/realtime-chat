import { Paper } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

function ChatContent() {

    const { username } = useParams()

    return (
        <>
            <Paper style={{ height: '380px', padding: 10 }} sx={{
                m: 1, ml: 0
            }}   >
                <h2>It is {username}'s Content</h2>
            </Paper >
        </>
    )
}

export default ChatContent;
