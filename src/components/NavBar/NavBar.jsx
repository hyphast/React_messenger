import NavBarCss from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="container">
                <div className={NavBarCss.navBar_inner}>
                    <ul className={NavBarCss.navBar_menu}>
                        <li>
                            <NavLink activeClassName={NavBarCss.active} to='/profile'>Profile</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={NavBarCss.active} to='/dialogs'>Messages</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={NavBarCss.active} to='/news'>News</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={NavBarCss.active} to='/music'>Music</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={NavBarCss.active} to='/settings'>Settings</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;