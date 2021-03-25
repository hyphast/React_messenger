import PostCss from './Post.module.css';
import React from "react";

const Post = (props) => {
    return (
        <div className={PostCss.post}>
            <p>{props.post}</p>
            <span>Likes: {props.likesCount}</span>
        </div>
    )
}

export default Post;