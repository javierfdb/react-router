import * as React from 'react';
import {NavLink} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import CakeIcon from '@mui/icons-material/Cake';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';

// DEPLOY --> https://react-router-jdb.netlify.app/
// REPSITORIO --> https://github.com/javierfdb/react-router

export default function Header() {

    const handleShowMenu= () => {
     const menuMob = document.querySelector(".MuiPaper-root ul");
     menuMob.classList.add("active");
    };

    const handleHideMenu= () => {
        const menuMobClose = document.querySelector(".MuiPaper-root ul");
        menuMobClose.classList.remove("active");
    };
   
    return (
        <>
            <header>
                <AppBar component="nav">
                    <Toolbar>
                        <Container maxWidth="lg">
                            <MenuIcon onClick={handleShowMenu} sx={{ mr: 1 }}  />
                            <ul>
                                <CloseIcon onClick={handleHideMenu} />
                                <li>
                                    <NavLink to="/" onClick={handleHideMenu}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/QuienesSomos" onClick={handleHideMenu}>Quienes somos</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contacto" onClick={handleHideMenu}>Contacto</NavLink>
                                </li>
                            </ul>
                        </Container>
                        <CakeIcon />
                    </Toolbar>
                </AppBar>
            </header>
        </>
    )
};
