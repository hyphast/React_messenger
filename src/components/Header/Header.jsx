import React from "react";
import HeaderStyles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import Button from "../Common/Button/Button";
import Icon from "../Common/Icon/Icon";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Header = ({
    isAuth, login, logout
}) => {
  return (
    <header className={HeaderStyles.header}>
      <div className='container'>
        <div className={HeaderStyles.headerInner}>
          <h1 className={HeaderStyles.headerLogo}>Messenger</h1>

            <div className={HeaderStyles.headerLeft}>
                {isAuth ?
                    <>
                        <div className={HeaderStyles.log}>{login}</div>
                        <Button className={HeaderStyles.btnLogout} onClick={logout}>
                            Logout
                            <Icon className={HeaderStyles.signOutIcon} name={faSignOutAlt} size='sm'/>
                        </Button>
                    </>
                    :
                    <NavLink to={'/login'}><Button className={HeaderStyles.btnLogout}>Login</Button></NavLink>}
            </div>
        </div>
      </div>
    </header>
  )
};

export default Header;