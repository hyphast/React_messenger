import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import LoginPage from './components/Login/Login';
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
              <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
              <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
              <Route path='/users' render={withSuspense(UsersContainer)}/>
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
