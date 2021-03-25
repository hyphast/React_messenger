import DialogsCss from "../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={DialogsCss.message}>{props.message}</div>
    )
}

export default Message;