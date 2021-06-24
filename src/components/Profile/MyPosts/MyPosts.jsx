import MyPostsStyles from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength} from "../../../Utils/Validators/Validators";
import {Textarea} from "../../Common/FormControls/FormControl";

const maxLength10 = maxLength(10);

const AddPostForm = (props) => {
    return <form className={MyPostsStyles.form} onSubmit={props.handleSubmit}>
        <Field validate={[maxLength10]} placeholder='Введите текст поста' cols='100' component={Textarea} name={'post'}/>
        <button>Post</button>
    </form>
}

const AddPostFormRedux = reduxForm({form: 'AddPostForm'})(AddPostForm);


const MyPosts = React.memo(props => {
    let postsElements = props.postsData.map(p => <Post key={p.id} post={p.post} likesCount={p.likesCount}/>)

    let onAddPost = (formData) => {
        props.addPost(formData.post);
    }

    return (
        <div className={MyPostsStyles.MyPosts}>
            <h2>My Posts</h2>
            <AddPostFormRedux onSubmit={onAddPost}/>

            <div className={MyPostsStyles.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;