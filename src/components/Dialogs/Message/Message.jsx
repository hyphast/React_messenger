import React from 'react';
import DialogsStyles from "../Dialogs.module.scss";

const Message = ({
    message
 }) => {
    return (
        <div className={DialogsStyles.message}>{message}</div>
    )
}

export default Message;