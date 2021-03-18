import HeaderCss from './Header.module.css';

const Header = () => {
  return (
    <header className={HeaderCss.header}>
      <div className='container'>
        <div className={HeaderCss.header_inner}>
          <img className={HeaderCss.header_logo} src="https://logomaster.ai/static/media/gallery002.27efc7d2.png" alt="logo"/>
          
          <h1 className={HeaderCss.header_logo_title}>Messenger</h1>
        </div>
      </div>
    </header>
  )
};

export default Header;