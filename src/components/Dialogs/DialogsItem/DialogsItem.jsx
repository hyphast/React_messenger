import React from 'react';
import DialogsStyles from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";

const DialogsItem = ({
    id, name
 }) => {
    let path = '/dialogs/' + id;
    return (
        <div className={DialogsStyles.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogsItem;