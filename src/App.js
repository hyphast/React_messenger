import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Message from './components/Messages/Message';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <div className='main container'>
        <NavBar />
        <Route path='/profile' component={Profile} />
        <Route path='/dialogs' component={Message} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings}/>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
