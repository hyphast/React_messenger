import DialogsCss from './Dialogs.module.css';
import Dialogs_item from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.DialogPage.dialogsData.map( d => <Dialogs_item key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.DialogPage.dialogs_messagesData.map( m => <Message key={m.id} message={m.message}/>)

    let onNewMessageChange = (event) => {
        const targetValue = event.target.value;
        props.newMessageChange(targetValue);
    }
    let onNewMessageClick = () => {
        props.newMessage();
    }

    return (
        <div className={DialogsCss.dialogs}>
            <div className={DialogsCss.dialogs_item}>
                { dialogsElements }
            </div>

            <div className={DialogsCss.messages}>
                { messagesElements }

                <div className={DialogsCss.message_input}>
                    <textarea onChange={onNewMessageChange}
                              value={props.DialogPage.messageNewText}
                              placeholder='Введите сообение' cols='70'></textarea>
                    <button onClick={onNewMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
