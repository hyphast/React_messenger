import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
  return (
  <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <div className='main container'>
        <NavBar />
        <Route exact path='/profile' render={() => <Profile /> }/>
        <Route exact path='/dialogs' render={() => <DialogsContainer />} />
        <Route exact path='/users' render={() => <UsersContainer />} />
        <Route exact path='/news' render={() => <News />} />
        <Route exact path='/music' render={() => <Music />} />
        <Route exact path='/settings' render={() => <Settings />}/>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
