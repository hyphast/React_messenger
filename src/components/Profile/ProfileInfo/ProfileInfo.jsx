import React from "react";
import ProfileInfoStyles from './ProfileInfo.module.scss';
import anon_ava from '../../../assets/images/anon_ava.jpg';
import {ProfileStatus} from "./ProfileStatus";
import Button from "../../Common/Button/Button";

const ProfileInfo = ({
    profile, status, updateUserStatus, setUserUnfollow, setUserFollow, isFollowing
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
            <div className={ProfileInfoStyles.btnFollowing}>
                {isFollowing
                    ? <Button onClick={() => setUserUnfollow(profile.userId)}>unfollow</Button>
                    : <Button onClick={() => setUserFollow(profile.userId)}>follow</Button>
                }
            </div>
        </div>
    )
}

export default ProfileInfo;