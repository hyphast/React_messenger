import UsersCss from "./Users.module.css";
import * as axios from "axios";
import userPng from "../../../src/assets/images/user.png";

const Users = (props) => {
    if(props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items);
        })
    }

    return <div className={UsersCss.users}>
    {
        props.users.map(user =>
            <div className={UsersCss.userInner} key={user.id}>
                <div className={UsersCss.leftInfo}>
                    <img className={UsersCss.photo} src={user.photos.small !==null
                        ? user.photos.small
                        : userPng} alt=""/>
                    <div>
                    {user.followed
                        ? <button onClick={ () => {props.unfollow(user.id)}} className={UsersCss.btn}>unfollow</button>
                        : <button onClick={ () => {props.follow(user.id)}} className={UsersCss.btn}>follow</button>}
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