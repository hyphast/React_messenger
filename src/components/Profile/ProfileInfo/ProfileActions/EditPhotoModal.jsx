import React from "react";
import ProfileInfoStyles from "../ProfileInfo.module.scss";
import Button from "../../../Common/Button/Button";
import Icon from "../../../Common/Icon/Icon";
import Modal from "../../../Common/Modal/Modal";
import Tooltip from "../../../Common/ToolTip/Tooltip";

export const EditPhotoModal = (
  {text, onClick, iconName, modalTitle, isOpen, onCancel, savePhoto}
) => {
  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return  (
      <div className={ProfileInfoStyles.btn}>
        <Tooltip content='Изменить фото профиля' position='bottom'>
          <Button onClick={ onClick }>
            { text }
            <Icon className={ProfileInfoStyles.editIcon} name={iconName}/>
          </Button>
        </Tooltip>
        <Modal title={ modalTitle } isOpen={ isOpen } onCancel={ onCancel } className={ProfileInfoStyles.modalEditPhoto} editMode>
          <input type='file' onChange={ onPhotoSelected }/>
        </Modal>
      </div>
  )
}
