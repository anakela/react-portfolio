import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/root.css';

export default function Navbar({ handlePageChange }) {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 10 }} >
            <AppBar position="static" id="navbar">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    > */}
                        {/* <MenuIcon /> */}
                    {/* </IconButton> */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        fontFamily="Lobster, cursive"
                        fontSize="48px"
                        onClick={() => handlePageChange('About')}
                    >
                        Angela Soto's Portfolio
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => handlePageChange('About')}
                    >
                        About Me
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => handlePageChange('Work')}
                    >
                        Work
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => handlePageChange('Contact')}
                    >
                        Contact Me
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => handlePageChange('Resume')}
                    >
                        Resume
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}