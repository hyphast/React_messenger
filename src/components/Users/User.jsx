import React from "react";
import UsersStyles from "./Users.module.scss";
import {NavLink} from "react-router-dom";
import user_anon from "../../assets/images/anon_ava.jpg";
import Button from "../Common/Button/Button";
import Image from "../Common/Image/Image";

const User = ({
    user, followingInProgress, follow, unfollow
}) => {
   return (
    <div className={UsersStyles.userInner}>
        <div className={UsersStyles.leftInfo}>
            <NavLink to={'profile/' + user.id}>
                <Image src={!user.photos.small ? user_anon : user.photos.small} alt="user avatar" width={115} height={95}/>
            </NavLink>
            <div>
                {!user.followed ? <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }} className={UsersStyles.btnFollow}>follow</Button>
                    : <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }} className={UsersStyles.btnFollow}>unfollow</Button>}
            </div>
        </div>
        <div className={UsersStyles.userInfo}>
            <h3>{user.name}</h3>
            <p>{user.status}</p>
        </div>
        <div className={UsersStyles.loc}>
            <p>Russia</p>
            <p>Moscow</p>
        </div>
    </div>
   )
}

export default User;