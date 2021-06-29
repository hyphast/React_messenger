import {addPost, setLike} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.ProfilePage.postsData,
        profile: state.ProfilePage.profile
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, setLike})(MyPosts)

export default MyPostsContainer;