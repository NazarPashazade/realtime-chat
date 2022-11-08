import { Avatar } from '@mui/material';
import React from 'react';
import { deepOrange, deepPurple } from '@mui/material/colors';
import styles from './UserAvatar.module.scss'

export default function UserAvatar({ user }) {
    const { avatarURL, username } = user

    return (
        <>
            {avatarURL
                ? <Avatar className={styles.avatar} alt={username} src={avatarURL} />
                : <Avatar className={styles.avatar} sx={{ bgcolor: deepOrange[500] }}>{username[0]}</Avatar>
            }
        </>
    );
}

