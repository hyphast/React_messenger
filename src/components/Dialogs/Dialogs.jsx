import DialogsCss from './Dialogs.module.css';
import Dialogs_item from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import React from "react";
import {addMessageCreator, updateMessageCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().DialogPage;

    let dialogsElements = state.dialogsData.map( d => <Dialogs_item name={d.name} id={d.id}/>)
    let messagesElements = state.dialogs_messagesData.map ( m => <Message message={m.message} /> )

    let onNewMessageChange = (event) => {
        const targetValue = event.target.value;
        props.store.dispatch(updateMessageCreator(targetValue));
    }
    let onNewMessageClick = () => {
        props.store.dispatch(addMessageCreator());
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
                              value={props.store.getState().DialogPage.messageNewText}
                              placeholder='Введите сообение' cols='70'></textarea>
                    <button onClick={onNewMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
