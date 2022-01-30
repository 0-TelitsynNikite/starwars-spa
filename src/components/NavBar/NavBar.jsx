import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.scss';

const NavBar = () => {
    return (
        <nav className="nav">
            <NavLink className="nav__item" to='/'>Main</NavLink>
            <NavLink className="nav__item" to='/characters'>Characters</NavLink>
            <NavLink className="nav__item" to='/planets'>Planets</NavLink>
            <NavLink className="nav__item" to='/vehicles'>Vehicles</NavLink>
        </nav>
    );
};

export default NavBar;