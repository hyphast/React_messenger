import {follow} from "../../redux/usersReducer";
import {unfollow} from "../../redux/usersReducer";
import {getUsers} from "../../redux/usersReducer";
import Users from "./Users";
import {connect} from "react-redux";
import React from "react";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize,  this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber);
    }

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
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress,
    }
}

export default connect(
    mapStateToProps,
    {follow, unfollow, getUsers,
})(UsersContainer);
