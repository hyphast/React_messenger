import React from "react";
import ProfileInfoStyles from './ProfileInfo.module.scss';
import anon_ava from '../../../assets/images/anon_ava.jpg';
import {ProfileStatus} from "./ProfileStatus";
import Image from "../../Common/Image/Image";
import ProfileActions from "./ProfileActions/ProfileActions";

const ProfileInfo = ({
    profile, status, updateUserStatus, isOwner
 }) => {

    return (
        <div>
            <div className={ProfileInfoStyles.profileInner}>
                <Image className={ProfileInfoStyles.profileAvatar}
                       src= { (!profile.photos.small || !profile.photos.large) ? anon_ava : profile.photos.large }
                       alt="avatar" width={200} height={200}/>

                <div className={ProfileInfoStyles.profileInfo}>
                    <h4 className={ProfileInfoStyles.profileName}>{profile.fullName}</h4>

                        <ProfileStatus status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
                </div>
            </div>

            <ProfileActions isOwner={isOwner}/>
        </div>
    )
}

export default ProfileInfo;