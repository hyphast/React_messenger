import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength} from "../../../Utils/Validators/Validators";
import {Textarea} from "../../Common/FormControls/FormControl";
import Button from "../../Common/Button/Button";
import MyPostsStyles from "./MyPosts.module.scss";
import classname from "classnames";

const maxLength40 = maxLength(40);

const AddPostForm = (props) => {
    return <form className={classname('d-flex', MyPostsStyles.form)} onSubmit={props.handleSubmit}>
        <Field validate={[maxLength40]} placeholder='Введите текст поста' cols='100' component={Textarea} name={'post'}/>
        <Button>Post</Button>
    </form>
}

const AddPostFormRedux = reduxForm({form: 'AddPostForm'})(AddPostForm);

const MyPosts = React.memo(props => {
    let onAddPost = (formData) => {
        props.addPost(formData.post);
    }

    let postsElements = props.postsData.map(p =>
        <Post idPost={p.id} key={p.id} post={p.post}
              likesCount={p.likesCount} setLike={props.setLike}
              isLiked={p.liked} profile={props.profile}
              date ={p.date}
        />)

    return (
        <div className={MyPostsStyles.myPosts}>
            <h2>My Posts</h2>
            <AddPostFormRedux onSubmit={onAddPost}/>

            <div className='mt-30'>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;