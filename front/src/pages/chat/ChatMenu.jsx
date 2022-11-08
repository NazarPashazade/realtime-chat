import { MenuList, Paper } from '@mui/material';
import React from 'react';
import { userList } from '../../api/user.api';
import ChatMenuItem from '../../components/chat-menu-item/ChatMenuItem';

export default function ChatMenu() {

    return (
        <Paper style={{ height: '400px' }} sx={{ m: 1, mr: 0 }}>
            <MenuList>
                {userList.map((user, i) => <ChatMenuItem index={i} user={user} />)}
            </MenuList>
        </ Paper >
    );
}

