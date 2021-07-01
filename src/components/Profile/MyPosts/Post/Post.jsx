import React from "react";
import PostStyles from './Post.module.scss';
import Icon from "../../../Common/Icon/Icon";
import { DateTime } from "luxon";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import anon_ava from "../../../../assets/images/anon_ava.jpg";
import classname from "classnames";
import Image from "../../../Common/Image/Image";

const Post = ({
    post, idPost, likesCount, setLike, isLiked, profile, date
}) => {

    let onLikedAction = () => {
        setLike(!isLiked, idPost, likesCount);
    }

    return (
        <>
        <div className={classname('d-flex', PostStyles.headerPost)}>
            <Image className={PostStyles.photo}
                   src= { !profile.photos.small ? anon_ava : profile.photos.small } alt="photo"
                   width={45} height={45} circle={true}
            />
            <div className={classname('flex-column', PostStyles.postInfo)}>
                <h5>{profile.fullName}</h5>
                <span>{date.toLocaleString(DateTime.DATETIME_MED)}</span>
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