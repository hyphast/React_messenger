import PostCss from './Post.module.css';

const Post = (props) => {
    return (
        <div className={PostCss.post}>
            <p>{props.message}</p>
        </div>
    )
}

export default Post;