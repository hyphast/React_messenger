import React from 'react'
import Profile from './Profile';
import {getUserProfile} from '../../redux/profilePageReducer'
import {connect} from 'react-redux';
import Preloader from "../Common/Preloader/Preloader";
import {withRouter} from "react-router";
import {Redirect} from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 2;
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login'/>

        return (
            <>
                { (!this.props.profile || this.props.isFetching) ? <Preloader /> :
               <Profile {...this.props} /> }
            </>
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.ProfilePage.profile,
        isFetching: state.ProfilePage.isFetching,
        isAuth: state.auth.isAuth,
})

let WithURLDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile,})(WithURLDataProfileContainer);
