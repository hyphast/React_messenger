import React from "react";
import ProfileInfoStyles from './ProfileInfo.module.scss';
import anon_ava from '../../../assets/images/anon_ava.jpg';
import {ProfileStatus} from "./ProfileStatus";
import Image from "../../Common/Image/Image";
import {faFacebook, faVk, faTwitter, faInstagram, faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe, faLink} from '@fortawesome/free-solid-svg-icons';
import ProfileActions from "./ProfileActions/ProfileActions";
import Icon from "../../Common/Icon/Icon";
import Tooltip from "../../Common/ToolTip/Tooltip";

const ProfileInfo = ({
   profile, status, updateUserStatus, isOwner
 }) => {

  const icons = [faFacebook, faGlobe, faVk, faTwitter, faInstagram, faYoutube, faGithub,  faLink];
  let i = 0;

  return (
    <div>
      <div className={ProfileInfoStyles.profileInner}>
        <Image className={ProfileInfoStyles.profileAvatar}
               src={(!profile.photos.small || !profile.photos.large) ? anon_ava : profile.photos.large}
               alt="avatar" width={200} height={200}/>

        <div className={ProfileInfoStyles.profileInfo}>
          <h4 className={ProfileInfoStyles.profileName}>{profile.fullName}</h4>

          <ProfileStatus status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>

          <div className={ProfileInfoStyles.profileData}>
            <span>
              <b>User ID: </b> {profile.userId}
            </span>
            <span>
              <b>About me: </b> {profile.aboutMe}
            </span>
            <span>
              <b>Looking for a job: </b> {profile.lookingForAJob ? 'Yes' : 'No'}
            </span>
            <span>
              <b>Looking for a job description: </b>
              <p>{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : <i>Empty</i>}</p>
            </span>
            <span className={ProfileInfoStyles.contacts}>
                          <b>Contacts: </b>
              {Object.keys(profile.contacts).map(key => {
                return (
                <Tooltip content={ profile.contacts[key] } contentEmpty='Нет ссылки' position='bottom'>
                  <Contacts key={key} hrefPath={profile.contacts[key]} iconName={icons[i++]}/>
                </Tooltip>
                )
              })}
            </span>
          </div>
        </div>
      </div>

      <ProfileActions isOwner={isOwner}/>
    </div>
  )
}

const Contacts = ({
  hrefPath, iconName
}) => {
  return (
    <a href={hrefPath} target='_blank'>
      <Icon name={iconName} size='lg'></Icon>
    </a>
  )
}

export default ProfileInfo;