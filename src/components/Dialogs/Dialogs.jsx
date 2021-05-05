import DialogsCss from './Dialogs.module.css';
import Dialogs_item from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength} from "../../Utils/Validators/Validators";
import {Textarea} from "../Common/FormControls/FormControl";

const maxLength10 = maxLength(10);

const AddMessageForm = (props) => {
    return <form className={DialogsCss.form} onSubmit={props.handleSubmit}>
        <Field validate={[maxLength10]} placeholder='Введите сообение' cols='70' component={Textarea} name={'message'}/>
        <button>Send</button>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'AddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
    let dialogsElements = props.DialogPage.dialogsData.map( d => <Dialogs_item key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.DialogPage.dialogs_messagesData.map( m => <Message key={m.id} message={m.message}/>)

    let onNewMessage = (formData) => {
        props.newMessage(formData.message);
    }

    return (<div className={DialogsCss.wrapper}>
        <div className={DialogsCss.dialogs}>
            <div className={DialogsCss.dialogs_item}>
                { dialogsElements }
            </div>
        </div>
        <div className={DialogsCss.messages}>
            { messagesElements }

            <div className={DialogsCss.message_input}>
                <AddMessageFormRedux onSubmit={onNewMessage}/>
            </div>
        </div>
    </div>)
}

export default Dialogs;
