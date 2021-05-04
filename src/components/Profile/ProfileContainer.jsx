import React from 'react'
import Profile from './Profile';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profilePageReducer'
import {connect} from 'react-redux';
import Preloader from "../Common/Preloader/Preloader";
import {withRouter} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 16704;
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
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
        status: state.ProfilePage.status
})

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile,getUserStatus,updateUserStatus})
    )(ProfileContainer);
