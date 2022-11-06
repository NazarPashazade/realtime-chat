import PersonIcon from '@mui/icons-material/Person';
import { MenuItem, MenuList, Paper, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../../api/user.api';

export default function ChatMenu() {
    const navigate = useNavigate()

    return (
        <Paper sx={{ width: 230, margin: 2 }}>
            <MenuList>

                {users.map((username, i) => {
                    return <MenuItem key={i} onClick={() => navigate(`/chat/${username}`)}>
                        <PersonIcon style={{ paddingRight: 15 }} />
                        <Typography variant="inherit"> {username} </Typography>
                    </MenuItem>
                })}

            </MenuList>
        </Paper >
    );
}

