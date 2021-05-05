import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import LoginPage from './components/Login/Login';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
      if(!this.props.initialized) {
          return <Preloader/>
      }
      return (
          <div className='app-wrapper'>
            <HeaderContainer/>
            <div className='main container'>
              <NavBar/>
              <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
              <Route path='/dialogs' render={() => <DialogsContainer/>}/>
              <Route path='/users' render={() => <UsersContainer/>}/>
              <Route exact path='/news' render={() => <News/>}/>
              <Route exact path='/music' render={() => <Music/>}/>
              <Route exact path='/settings' render={() => <Settings/>}/>
              <Route exact path='/login' render={() => <LoginPage/>}/>
            </div>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
    (App);
