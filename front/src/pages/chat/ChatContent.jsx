import React from 'react';
import { useParams } from 'react-router-dom';

function ChatContent() {

    const { username } = useParams()

    return (
        <>
            <div style={{ margin: 10 }}>  <h2>It is {username}'s Content</h2>  </div>
        </>
    )
}

export default ChatContent;
