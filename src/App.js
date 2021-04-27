import './App.css';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import LoginPage from './components/Login/Login';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {
  return (
  <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer />
      <div className='main container'>
        <NavBar />
        <Route path='/profile/:userId?' render={() => <ProfileContainer /> }/>
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route exact path='/news' render={() => <News />} />
        <Route exact path='/music' render={() => <Music />} />
        <Route exact path='/settings' render={() => <Settings />}/>
        <Route exact path='/login' render={() => <LoginPage />}/>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
