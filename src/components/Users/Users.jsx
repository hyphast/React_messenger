import React from "react";
import UsersCss from "./Users.module.css";
import user_anon from "../../assets/images/anon_ava.jpg";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    let i, n;
    if (props.currentPage <= 2) {
        i = 1;
        n = 5;
    } else if (props.currentPage > 2 && props.currentPage < pagesCount - 1) {
        i = props.currentPage - 2;
        n = props.currentPage + 2;
    } else {
        i = pagesCount - 4;
        n = pagesCount;
    }
    for (; i <= n; i++) {
        pages.push(i);
    }
    return <div className={UsersCss.users}>
        <div className={UsersCss.pagesNum}>
        <span onClick={() => {props.onPageChanged(1)}}>←</span>
            {pages.map((p) => {
                return <span className={props.currentPage === p && UsersCss.selectedPage} onClick={() => {
                    props.onPageChanged(p)
                }}>{p} </span>
            })}
            <span onClick={() => {props.onPageChanged(pagesCount)}}>→</span>
        </div>
        {
            props.users.map(user =>
                <div className={UsersCss.userInner} key={user.id}>
                    <div className={UsersCss.leftInfo}>
                        <NavLink to={'profile/' + user.id}>
                        <img className={UsersCss.photo} src={!user.photos.small
                            ? user_anon
                            : user.photos.small} alt="user_ava"/>
                        </NavLink>
                        <div>
                            {!user.followed ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id)
                                }} className={UsersCss.btn}>follow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id)
                                }} className={UsersCss.btn}>unfollow</button>}
                        </div>
                    </div>
                    <div className={UsersCss.userInfo}>
                        <h3>{user.name}</h3>
                        <p>{user.status}</p>
                    </div>
                    <div className={UsersCss.loc}>
                        <p>{"user.location.country"}</p>
                        <p>{"user.location.city"}</p>
                    </div>
                </div>)
        }
    </div>
}

export default Users;