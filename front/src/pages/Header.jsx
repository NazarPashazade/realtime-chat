import PsychologyIcon from '@mui/icons-material/Psychology';
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const navBarItems = [
    { 'url': '/dashboard/Nazar/?country=Azerbaijan', title: 'Dashboard' },
    { 'url': '/chat', title: 'Chat' },
    { 'url': '/posts', title: 'Posts' },
    { 'url': '/about', title: 'About' },
    { 'url': '/contact', title: 'Contact' },
]

function Header() {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Grid container spacing={2} alignItems={'center'}>

                            <Grid item xs={1}>
                                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                    <PsychologyIcon style={{ fontSize: 40 }} />
                                </IconButton>
                            </Grid>

                            {navBarItems.map((item, i) => {
                                return (
                                    <Grid item xs={2} key={i} >
                                        <Typography variant="h6" color="inherit" component="div">
                                            <NavLink to={item.url}> {item.title}</NavLink>
                                        </Typography>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
}

export default Header;
