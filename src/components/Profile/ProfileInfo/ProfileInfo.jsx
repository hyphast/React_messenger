import ProfileInfoCss from './ProfileInfo.module.css';
import anon_ava from '../../../assets/images/anon_ava.jpg';
import {UserStatus} from "./UserStatus";

const ProfileInfo = (props) => {

    return (
        <div>
            <div className={ProfileInfoCss.profile_inner}>
                <img className={ProfileInfoCss.profile_avatar} src= { (!props.profile.photos.small || !props.profile.photos.large) ? anon_ava : props.profile.photos.large } alt=""/>

                <div className={ProfileInfoCss.profileInfo}>
                    <h4 className={ProfileInfoCss.profile_name}>{props.profile.fullName}</h4>
                    <UserStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;