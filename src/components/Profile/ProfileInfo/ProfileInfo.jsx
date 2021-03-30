import ProfileInfoCss from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className={ProfileInfoCss.profile_top_img} src="http://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt="photo"/>
            <div className={ProfileInfoCss.profile_inner}>
                <img className={ProfileInfoCss.profile_avatar} src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt=""/>

                <div className={ProfileInfoCss.profileInfo}>
                    <h4 className={ProfileInfoCss.profile_name}>Oleg Shcherbakov</h4>
                    <p className={ProfileInfoCss.profile_description}>About me</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;