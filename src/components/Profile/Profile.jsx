import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({
    profile, status, updateUserStatus, setUserFollow, setUserUnfollow, isFollowing
 }) => {
    return (
        <div>
            <ProfileInfo
                profile={profile} status={status} updateUserStatus={updateUserStatus}
                setUserFollow={setUserFollow} setUserUnfollow={setUserUnfollow} isFollowing={isFollowing}
            />

            <MyPostsContainer />
        </div>
    )
}

export default Profile;