import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { navBarItems } from '../navbar/Navbar';

export const Menu = ({ id, isMenuOpen, handleMenuClose, anchorEl }) => {

  const navigate = useNavigate()

  console.log({isMenuOpen});

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
      {navBarItems.map(item, i => <MenuItem key={i} onClick={navigate(item.url)}>{item.title}</MenuItem>)}
    </Menu>
  );
}
