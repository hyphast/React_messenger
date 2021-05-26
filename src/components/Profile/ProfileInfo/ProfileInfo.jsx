import ProfileInfoStyles from './ProfileInfo.module.css';
import anon_ava from '../../../assets/images/anon_ava.jpg';
import {UserStatusWithHooks} from "./UserStatusWithHooks";

const ProfileInfo = (props) => {

    return (
        <div>
            <div className={ProfileInfoStyles.profile_inner}>
                <img className={ProfileInfoStyles.profile_avatar} src= { (!props.profile.photos.small || !props.profile.photos.large) ? anon_ava : props.profile.photos.large } alt=""/>

                <div className={ProfileInfoStyles.profileInfo}>
                    <h4 className={ProfileInfoStyles.profile_name}>{props.profile.fullName}</h4>
                    <UserStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;