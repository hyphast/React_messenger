import React from "react";
import ProfileInfoStyles from './ProfileInfo.module.scss';
import anon_ava from '../../../assets/images/anon_ava.jpg';
import {ProfileStatus} from "./ProfileStatus";

const ProfileInfo = ({
    profile, status, updateUserStatus
 }) => {
    return (
        <div>
            <div className={ProfileInfoStyles.profileInner}>
                <img className={ProfileInfoStyles.profileAvatar} src= { (!profile.photos.small || !profile.photos.large) ? anon_ava : profile.photos.large } alt=""/>

                <div className={ProfileInfoStyles.profileInfo}>
                    <h4 className={ProfileInfoStyles.profileName}>{profile.fullName}</h4>
                    <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;