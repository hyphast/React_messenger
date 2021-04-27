import ProfileInfoCss from './ProfileInfo.module.css';
import anon_ava from '../../../assets/images/anon_ava.jpg';

const ProfileInfo = (props) => {

    return (
        <div>
            <div className={ProfileInfoCss.profile_top_img} ></div>
            <div className={ProfileInfoCss.profile_inner}>
                <img className={ProfileInfoCss.profile_avatar} src= { (!props.profile.photos.small || !props.profile.photos.large) ? anon_ava : props.profile.photos.large } alt=""/>

                <div className={ProfileInfoCss.profileInfo}>
                    <h4 className={ProfileInfoCss.profile_name}>{props.profile.fullName}</h4>
                    <p className={ProfileInfoCss.profile_description}>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;