import MyPostsCss from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    debugger
    let postsElements = props.postsData.map (p => <Post post={p.post} likesCount={p.likesCount}/>)

    let createNewPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = createNewPost.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={MyPostsCss.MyPosts}>
            <h2>My Posts</h2>
            <textarea cols='100' placeholder='Введите текст поста' onChange={onPostChange} value={props.postNewText} ref={ createNewPost }/>
            <button onClick={ onAddPost }>Post</button>

            <div className={MyPostsCss.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;