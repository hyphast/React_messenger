import ProfileCss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />

            <MyPosts postsData={props.ProfilePage.postsData} postNewText={props.ProfilePage.postNewText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;