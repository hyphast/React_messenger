import React from "react";
import DialogsStyles from './Dialogs.module.scss';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {maxLength} from "../../Utils/Validators/Validators";
import {Textarea} from "../Common/FormControls/FormControl";
import Button from "../Common/Button/Button";

const maxLength20 = maxLength(20);

const AddMessageForm = ({
    handleSubmit
}) => {
    return <form className='d-flex' onSubmit={handleSubmit}>
        <Field validate={[maxLength20]} placeholder='Введите сообение' cols='70' component={Textarea} name={'message'}/>
        <Button style={{width: '70px'}}>Send</Button>
    </form>
}

const AddMessage = reduxForm({form: 'AddMessageForm'})(AddMessageForm);

const Dialogs = ({
     DialogPage, newMessage
 }) => {
    let dialogsElements = DialogPage.dialogsData.map( d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = DialogPage.dialogs_messagesData.map( m => <Message key={m.id} message={m.message}/>)

    let onNewMessage = (formData) => {
        newMessage(formData.message);
    }

    return (
    <div className={DialogsStyles.wrapper}>
        <div className={DialogsStyles.dialogs}>
            <div className={DialogsStyles.dialogsItem}>
                { dialogsElements }
            </div>
        </div>
        <div className={DialogsStyles.messages}>
            { messagesElements }
            <div className={DialogsStyles.messageInput}>
                <AddMessage onSubmit={onNewMessage}/>
            </div>
        </div>
    </div>)
}

export default Dialogs;
