import React from "react";
import UsersStyles from "./Users.module.css";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return <div className={UsersStyles.users}>
        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                   currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

        {props.users.map(user =>
            <User user={user} key={user.id} followingInProgress={props.followingInProgress}
                  follow={props.follow} unfollow={props.unfollow}/>)
        }
    </div>
}

export default Users;