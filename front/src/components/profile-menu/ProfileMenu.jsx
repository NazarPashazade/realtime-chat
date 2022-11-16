import AccountCircle from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Badge, IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { navBarItems } from '../navbar/Navbar';

export const ProfileMenu = ({ id, isMenuOpen, handleMenuClose, anchorEl }) => {

  const { Profile, Posts } = navBarItems;

  const navigate = useNavigate()

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={id}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => navigate(Profile.url)}>
        <IconButton size="large" aria-label="show new mails" color="inherit">
          <Badge badgeContent={1} color="error">
            <AccountCircle />
          </Badge>
        </IconButton>
        <p>{Profile.title}</p>
      </MenuItem>
      
      <MenuItem onClick={() => navigate(Posts.url)}>
        <IconButton size="large" aria-label="show new mails" color="inherit">
          <Badge badgeContent={1} color="error">
            <PostAddIcon />
          </Badge>
        </IconButton>
        <p>{Posts.title}</p>
      </MenuItem>

    </Menu>
  );
}
