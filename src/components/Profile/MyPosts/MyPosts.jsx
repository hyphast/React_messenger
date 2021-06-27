import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength} from "../../../Utils/Validators/Validators";
import {Textarea} from "../../Common/FormControls/FormControl";
import Button from "../../Common/Button/Button";
import MyPostsStyles from "./MyPosts.module.scss";

const maxLength10 = maxLength(10);

const AddPostForm = (props) => {
    return <form className='d-flex' onSubmit={props.handleSubmit}>
        <Field validate={[maxLength10]} placeholder='Введите текст поста' cols='100' component={Textarea} name={'post'}/>
        <Button style={{width: '70px', height: '35px'}}>Post</Button>
    </form>
}

const AddPostFormRedux = reduxForm({form: 'AddPostForm'})(AddPostForm);

const MyPosts = React.memo(props => {
    let postsElements = props.postsData.map(p => <Post key={p.id} post={p.post} likesCount={p.likesCount}/>)

    let onAddPost = (formData) => {
        props.addPost(formData.post);
    }

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