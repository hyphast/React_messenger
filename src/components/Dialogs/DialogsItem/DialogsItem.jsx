import DialogsCss from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs_item = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={DialogsCss.dialog}>
            <NavLink className='dialog_name' to={path} >{props.name}</NavLink>
        </div>
    )
}

export default Dialogs_item;