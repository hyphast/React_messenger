import UsersStyles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import user_anon from "../../assets/images/anon_ava.jpg";
import React from "react";

const User = (props) => {
   return (
    <div className={UsersStyles.userInner}>
        <div className={UsersStyles.leftInfo}>
            <NavLink to={'profile/' + props.user.id}>
                <img className={UsersStyles.photo} src={!props.user.photos.small
                    ? user_anon
                    : props.user.photos.small} alt="user_ava"/>
            </NavLink>
            <div>
                {!props.user.followed ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                        props.follow(props.user.id)
                    }} className={UsersStyles.btn}>follow</button>
                    : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                        props.unfollow(props.user.id)
                    }} className={UsersStyles.btn}>unfollow</button>}
            </div>
        </div>
        <div className={UsersStyles.userInfo}>
            <h3>{props.user.name}</h3>
            <p>{props.user.status}</p>
        </div>
        <div className={UsersStyles.loc}>
            <p>{"user.location.country"}</p>
            <p>{"user.location.city"}</p>
        </div>
    </div>
   )
}

export default User;