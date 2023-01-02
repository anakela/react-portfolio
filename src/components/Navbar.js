import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

import '../styles/root.css';
import useWindowDimension from '../utils/windowDimensions';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

export default function Navbar({ handlePageChange }) {
    const { height, width } = useWindowDimension();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const openNav = Boolean(anchorElNav);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1, width: "100%" }} >
                <AppBar position="static" id="navbar">
                    <Toolbar>
                        <Typography
                            id="nav-logo"
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            fontFamily="reklame-script, sans-serif"
                            fontWeight="700"
                            fontStyle="normal"
                            fontSize="36px"
                            // onClick={() => handlePageChange('About')}
                        >
                            Angela Soto's Portfolio
                        </Typography>
                        {width >= 900
                            ?
                            <div
                                style={{ display: "flex", direction: "row", flexWrap: "wrap", justifyContent: "space-evenly", alignContent: "center", fontWeight: "bold" }}
                            >
                                <Button
                                    color="inherit"
                                    onClose={handleClose}
                                // onClick={() => handlePageChange('About')}
                                >
                                    <Link to={"/"}>
                                        About Me
                                    </Link>
                                </Button>
                                <Button
                                    color="inherit"
                                    onClose={handleClose}
                                // onClick={() => handlePageChange('Portfolio')}
                                >
                                    <Link to={"/portfolio"}>
                                        Portfolio
                                    </Link>
                                </Button>
                                <Button
                                    color="inherit"
                                    onClose={handleClose}
                                // onClick={() => handlePageChange('Contact')}
                                >
                                    <Link to={"/contact"}>
                                        Contact Me
                                    </Link>
                                </Button>
                                <Button
                                    color="inherit"
                                    onClose={handleClose}
                                // onClick={() => handlePageChange('Contact')}
                                >
                                    <Link to={"/resume"}>
                                        Resume
                                    </Link>
                                </Button>
                            </div>
                            :
                            // Mobile Hamburger Menu
                            <Box id='hamburger-menu' sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "right" }}>
                                <IconButton
                                    id="menu-button"
                                    size="large"
                                    aria-controls={openNav ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openNav ? 'true' : undefined}
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={openNav}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    <div>
                                        <MenuItem className='mobileMenuItem' onClick={handleCloseNavMenu}>
                                            <Button color="inherit" >
                                                <Link style={{ textDecoration: "none", color: "black" }} to="/" onClose={handleClose}>
                                                    About Me
                                                </Link>
                                            </Button>
                                        </MenuItem>
                                        <MenuItem className='mobileMenuItem' onClick={handleCloseNavMenu}>
                                            <Button color="inherit" onClose={handleClose}>
                                                <Link style={{ textDecoration: "none", color: "black" }} to={"/portfolio"}>
                                                    Portfolio
                                                </Link>
                                            </Button>
                                        </MenuItem>
                                        <MenuItem className='mobileMenuItem' onClick={handleCloseNavMenu}>
                                            <Button color="inherit" onClose={handleClose}>
                                                <Link style={{ textDecoration: "none", color: "black" }} to="/contact">
                                                    Contact Me
                                                </Link>
                                            </Button>
                                        </MenuItem>
                                        <MenuItem className='mobileMenuItem' onClick={handleCloseNavMenu}>
                                            <Button color="inherit" onClose={handleClose}>
                                                <Link style={{ textDecoration: "none", color: "black" }} to="/resume">
                                                    Resume
                                                </Link>
                                            </Button>
                                        </MenuItem>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                            onClick={handleClick}
                                            onClose={handleClose}
                                        >
                                        </Menu>
                                    </div>
                                </Menu>
                            </Box>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}