import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
  return (
  <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <div className='main container'>
        <NavBar />
        <Route exact path='/profile' render={() => <Profile ProfilePage={props.state.ProfilePage} dispatch={props.dispatch} /> }/>
        <Route exact path='/dialogs' render={() => <Dialogs store={props.store}/>} />
        <Route exact path='/news' render={() => <News />} />
        <Route exact path='/music' render={() => <Music />} />
        <Route exact path='/settings' render={() => <Settings />}/>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
