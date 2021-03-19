import DialogsCss from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs_item = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path} className={DialogsCss.dialog}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={DialogsCss.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={DialogsCss.dialogs}>
            <div className={DialogsCss.dialogs_item}>
                <Dialogs_item name='Oleg' id='1'/>
                <Dialogs_item name='Ivan' id='2'/>
                <Dialogs_item name='Kolya' id='3'/>
            </div>

            <div className={DialogsCss.messages}>
               <Message message='Hi, how r u?' />
               <Message message='1244' />
            </div>
        </div>
    )
}

export default Dialogs;
