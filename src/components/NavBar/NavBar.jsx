import React from "react";
import NavBarStyles from './NavBar.module.scss';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="container">
                <div className={NavBarStyles.navBarInner}>
                    <ul className={NavBarStyles.navBarMenu}>
                        <li>
                            <NavLink activeClassName={NavBarStyles.active} to='/profile'>Profile</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={NavBarStyles.active} to='/dialogs'>Messages</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={NavBarStyles.active} to='/users'>Users</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={NavBarStyles.active} to='/news'>News</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={NavBarStyles.active} to='/music'>Music</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={NavBarStyles.active} to='/settings'>Settings</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;