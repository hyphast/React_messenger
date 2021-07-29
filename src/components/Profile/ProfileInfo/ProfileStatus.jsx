import React, {useEffect, useState} from "react";
import ProfileInfoStyles from './ProfileInfo.module.scss';
import ToolTip from "../../Common/ToolTip/Tooltip";

export const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
      <>
      {!props.isOwner
        ? <span className={!props.status && ProfileInfoStyles.status}>{props.status}</span>
        :
        <div>
            {!editMode
            ?
                <ToolTip content='Установить статус' position='bottom'>
                    <span onClick={activateEditMode} className={!props.status && ProfileInfoStyles.status}>
                        {props.status ? props.status : 'Set status'}</span>
                </ToolTip>
            :
           <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>}
        </div>
      }
    </>
    )
}