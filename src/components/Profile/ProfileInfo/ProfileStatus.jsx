import React, {useEffect, useState} from "react";
import ProfileInfoStyles from './ProfileInfo.module.scss';

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

    return <div>
        {!editMode && <span onDoubleClick={activateEditMode} className={!props.status && ProfileInfoStyles.status}>
            {props.status ? props.status : 'Set status'}</span> }
        {editMode && <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>}
    </div>
}