import DialogsStyles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={DialogsStyles.dialog}>
            <NavLink className='dialog_name' to={path} >{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;