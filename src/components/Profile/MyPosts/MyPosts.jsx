import MyPostsCss from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let postsElements = props.postsData.map (p => <Post post={p.post} likesCount={p.likesCount}/>)

    let createNewPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let updateText = () => {
        let text = createNewPost.current.value;
        props.dispatch(updateTextActionCreator(text));
    }

    return (
        <div className={MyPostsCss.MyPosts}>
            <h2>My Posts</h2>
            <textarea cols='100' placeholder='Введите текст поста' onChange={updateText} value={props.postNewText} ref={ createNewPost }/>
            <button onClick={ addPost }>Post</button>

            <div className={MyPostsCss.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;