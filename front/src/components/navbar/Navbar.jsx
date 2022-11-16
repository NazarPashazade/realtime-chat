import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileMenu } from '../mobile-menu/MobileMenu';
import { ProfileMenu } from '../profile-menu/ProfileMenu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const navBarItems = {
  Dashboard: { 'url': '/dashboard/Nazar/?country=Azerbaijan', title: 'Dashboard' },
  Posts: { 'url': '/posts', title: 'Posts' },
  About: { 'url': '/about', title: 'About' },
  Contact: { 'url': '/contact', title: 'Contact' },
  Notifications: { 'url': '/notifications', title: 'Notifications' },
  Profile: { 'url': '/profile', title: 'Profile' },
  Messages: { 'url': '/chat', title: 'Messages' },
}

export const Navbar = () => {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const { Messages, Notifications } = navBarItems;

  const isMenuOpen = !!profileAnchorEl;
  const isMobileMenuOpen = !!mobileMoreAnchorEl;

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setProfileAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate()

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <PsychologyIcon style={{ fontSize: 35 }} />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <IconButton
              onClick={() => navigate(Messages.url)}
              size="small"
              style={{marginRight:15}}
              color="inherit">
              <Typography variant="inherit"> About us </Typography>
            </IconButton>
 

            <IconButton
              onClick={() => navigate(Messages.url)}
              size="large"
              aria-label="show new mails"
              color="inherit">
              <Badge badgeContent={0} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            <IconButton
              onClick={() => navigate(Notifications.url)}
              size="large"
              aria-label="show new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileMenu id={mobileMenuId} isMobileMenuOpen={isMobileMenuOpen} handleMobileMenuClose={handleMobileMenuClose} handleProfileMenuOpen={handleProfileMenuOpen} mobileMoreAnchorEl={mobileMoreAnchorEl} />
      <ProfileMenu id={menuId} isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} anchorEl={profileAnchorEl} />
    </Box>
  );
}