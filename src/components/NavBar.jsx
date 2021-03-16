const NavBar = () => {
    return (
        <nav className='navBar'>
            <div className="container">
                <div className="navBar_inner">
                    <ul className='navBar-menu'>
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