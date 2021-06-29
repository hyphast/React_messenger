import React from "react";
import PostStyles from './Post.module.scss';
import Icon from "../../../Common/Icon/Icon";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import anon_ava from "../../../../assets/images/anon_ava.jpg";
import classname from "classnames";

const Post = ({
    post, idPost, likesCount, setLike, isLiked, profile, date
}) => {

    let onLikedAction = () => {
        setLike(!isLiked, idPost, likesCount);
    }
    debugger

    return (
        <>
        <div className={classname('d-flex', PostStyles.headerPost)}>
            <img className={PostStyles.photo} src= { !profile.photos.small ? anon_ava : profile.photos.small } alt="photo"/>
            <div className={classname('flex-column', PostStyles.postInfo)}>
                <h5>{profile.fullName}</h5>
                <span>{date}</span>
            </div>
        </div>
        <div className={PostStyles.post}>
            <p>{post}</p>
            <Icon clr={isLiked ? 'Tomato': null} name={faThumbsUp} onClick={onLikedAction}/>
            <span style={{userSelect:'none'}}> {likesCount}</span>
        </div>
        </>
    )
}

export default Post;