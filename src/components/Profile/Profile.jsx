import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({
    profile, status, updateUserStatus, isOwner
 }) => {
    return (
        <div>
            <ProfileInfo
                profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}
            />

            <MyPostsContainer/>
        </div>
    )
}

export default Profile;