import PostStyles from './Post.module.css';
import React from "react";

const Post = ({
    post, likesCount
}) => {
    return (
        <div className={PostStyles.post}>
            <p>{post}</p>
            <span>Likes: {likesCount}</span>
        </div>
    )
}

export default Post;