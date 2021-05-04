import {addPost} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.ProfilePage.postsData,
        postNewText: state.ProfilePage.postNewText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch(addPost(post));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;