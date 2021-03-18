import NavBarCss from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav>
            <div className="container">
                <div className={NavBarCss.navBar_inner}>
                    <ul className={NavBarCss.navBar_menu}>
                        <li><a href='#'>Profile</a></li>
                        <li><a href='#'>Messages</a></li>
                        <li><a href='#'>News</a></li>
                        <li><a href='#'>Music</a></li>
                        <li><a href='#'>Settings</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;