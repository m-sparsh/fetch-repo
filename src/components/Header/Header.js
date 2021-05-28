import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Searchbox from '../Searchbox/Searchbox.js';
function Header(){
    return(
        <>
    <div className={classes.header}>
        <h1>Repo Search</h1>
        <ul>
            <li><NavLink to="/" exact activeClassName={classes.active}>Info</NavLink></li>
            <li><NavLink to="/repos" activeClassName={classes.active}>Repos</NavLink></li>
        </ul>
    </div>
    <Searchbox />
    </>
    );
}

export default Header;