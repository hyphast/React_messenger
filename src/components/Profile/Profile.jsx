import ProfileCss from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";
import Post from '../MyPosts/Post/Post';

const Profile = () => {
    return (
        <div>
            <img className={ProfileCss.profile_top_img} src="http://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt="photo"/>
            <div className={ProfileCss.profile_inner}>
                <img className={ProfileCss.profile_avatar} src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt=""/>

                <h4 className={ProfileCss.profile_name}>Oleg Shcherbakov</h4>
                <p className={ProfileCss.profile_description}>About me</p>
            </div>

            <MyPosts />
            <Post message='first'/>
            <Post message='second'/>
            <Post message='third'/>
        </div>
    )
}

export default Profile;