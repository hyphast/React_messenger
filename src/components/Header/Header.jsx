import HeaderStyles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={HeaderStyles.header}>
      <div className='container'>
        <div className={HeaderStyles.header_inner}>
          
          <h1 className={HeaderStyles.header_logo_title}>Messenger</h1>

            <div className={HeaderStyles.log}>
                {props.isAuth ? <div>{props.login}<button onClick={props.logout}>Logout</button></div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
      </div>
    </header>
  )
};

export default Header;