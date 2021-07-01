import React from 'react';
import DialogsStyles from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import Image from "../../Common/Image/Image";

const DialogsItem = ({
    id, name
 }) => {
    let path = '/dialogs/' + id;
    return (
        <div className={DialogsStyles.dialog}>
            <Image className={DialogsStyles.photo} alt='photo' width={25} height={25} circle={true}/>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogsItem;