import {follow, requestUsers} from "../../redux/usersReducer";
import {unfollow} from "../../redux/usersReducer";
import Users from "./Users";
import {connect} from "react-redux";
import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {pageSize, currentPage} = this.props;
        this.props.getUsers(pageSize, currentPage);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageSize, pageNumber);
    }

    debugger
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Users currentPage={this.props.currentPage}
                           totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           users={this.props.users}
                           onPageChanged={this.onPageChanged}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                           followingInProgress={this.props.followingInProgress}/>}
            </>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{follow, unfollow, getUsers: requestUsers})
)(UsersContainer);
