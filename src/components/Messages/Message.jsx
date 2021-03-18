import MessageCss from './Message.module.css';

const Message = () => {
    return (
    <div className={MessageCss.messages}>
        <div className={MessageCss.message}>Hello, how r u</div>
        <div className={MessageCss.message}>Hello, how r u</div>
        <div className={MessageCss.message}>Hello, how r u</div>
    </div>
    )
}

export default Message;