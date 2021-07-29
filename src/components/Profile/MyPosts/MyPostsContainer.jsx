import {addPost, setLike} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const MyPostsContainer = (props) => {
    return (
      <MyPosts {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        postsData: state.ProfilePage.postsData,
        profile: state.ProfilePage.profile,
    }
}

export default connect(mapStateToProps, {addPost, setLike})(MyPostsContainer)