import { MenuItem, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserAvatar from '../avatar/UserAvatar';
import styles from './ChatMenuItem.module.scss';

export default function ChatMenuItem({ user, index }) {

    const { username } = user

    const navigate = useNavigate()

    return (
        <MenuItem key={index} className={index % 2 == 0 ? styles.odd : styles.notOdd} onClick={() => navigate(`/chat/${username}`)}>
            <UserAvatar user={user} />
            <Typography className={styles.username} variant="inherit"> {username} </Typography>
        </MenuItem>
    );
}

