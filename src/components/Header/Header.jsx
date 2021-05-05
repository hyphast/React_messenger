import HeaderCss from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={HeaderCss.header}>
      <div className='container'>
        <div className={HeaderCss.header_inner}>
          <img className={HeaderCss.header_logo} src="https://logomaster.ai/static/media/gallery002.27efc7d2.png" alt="logo"/>
          
          <h1 className={HeaderCss.header_logo_title}>Messenger</h1>

            <div className={HeaderCss.log}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
      </div>
    </header>
  )
};

export default Header;