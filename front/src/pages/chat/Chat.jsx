import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import io from "socket.io-client";
import ChatMenu from './ChatMenu';
import CustomChat from './CustomChat'

function Chat() {

    const socket = io.connect('http://localhost:4001')

    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("JS")
    const [showChat, setShowChat] = useState(false)

    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    };


    return (
        <>
            <Grid container spacing={2}>

                {/* <Grid item xs={12}>

                    {!showChat ?
                        <div className="join-chat-container">

                            <h3>Join to chat</h3>
                            <input type="text" value={username} id="username" placeholder="Username..." onChange={(e) => setUsername(e.target.value)} />
                            <input type="text" value={room} id="room" placeholder="Room..." onChange={(e) => setRoom(e.target.value)} />
                            <button onClick={joinRoom}>Join</button>
                        </div>
                        : <CustomChat socket={socket} author={username} room={room} />
                    }
                </Grid> */}

                <Grid item xs={3}>
                    <ChatMenu />
                </Grid>
                <Grid item xs={9}>
                    <Outlet />
                </Grid>
            </Grid>
        </>
    )
}

export default Chat;
