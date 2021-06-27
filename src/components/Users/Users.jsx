import React from "react";
import UsersStyles from "./Users.module.scss";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = ({
   totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, follow, unfollow
}) => {
    return <div className={UsersStyles.users}>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                   currentPage={currentPage} onPageChanged={onPageChanged}/>

        {users.map(user =>
            <User user={user} key={user.id} followingInProgress={followingInProgress}
                  follow={follow} unfollow={unfollow}/>)
        }
    </div>
}

export default Users;