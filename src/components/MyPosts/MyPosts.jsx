import MyPostsCss from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={MyPostsCss.MyPosts}>
            <h2>My Posts</h2>
            <input type="text" size='75'/>

            <button>Post</button>
        </div>
    )
}

export default MyPosts;