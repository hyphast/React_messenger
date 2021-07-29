import React from "react";
import ProfileInfoStyles from "../ProfileInfo.module.scss";
import Button from "../../../Common/Button/Button";
import Icon from "../../../Common/Icon/Icon";
import Modal from "../../../Common/Modal/Modal";
import Tooltip from "../../../Common/ToolTip/Tooltip";
import {createField} from "../../../Common/FormControls/FormControl";
import {Input} from "../../../Common/FormControls/FormControl";
import FormControlStyles from "../../../Common/FormControls/FormControls.module.scss";
import {reduxForm} from "redux-form";

const editProfileForm = ({
   profile, handleSubmit, error
 }) => {
  return(
  <form className={ProfileInfoStyles.form} onSubmit={handleSubmit}>
    {error && <div className={FormControlStyles.formSummaryError}>
      {error}
      </div>
    }
    {createField('fullName', 'Full name', 'Full name', [], Input)}
    {createField('aboutMe', 'About me', 'About me', [], Input)}
    {createField('lookingForAJob', 'Are you looking for a job?', 'Looking for a job', [], 'input', {type: 'checkbox'})}
    {createField('lookingForAJobDescription', 'Description', 'Looking for a job description', [], Input)}
    {Object.keys(profile.contacts).map(key => {
      return createField('contacts.' + key, key, key[0].toUpperCase() + key.slice(1) + ' address', [], Input)
    })}
    <Button>Save</Button>
  </form>
  )
}

const EditPorfileFormRedux = reduxForm({form: 'editProfileForm'})(editProfileForm);

const EditInfoModal = (
  {text, onClick, iconName, modalTitle, isOpen, onCancel, profile, saveProfile}
) => {
  const onSubmitForm = (formData) => {
    saveProfile(formData);
  }
  return  (
      <div className={ProfileInfoStyles.btn}>
        <Tooltip content='Изменить информацию профиля' position='bottom'>
          <Button onClick={ onClick }>
            { text }
            <Icon className={ProfileInfoStyles.editIcon} name={iconName}/>
          </Button>
        </Tooltip>
        <Modal title={ modalTitle } isOpen={ isOpen } onCancel={ onCancel } className={ProfileInfoStyles.modal} editMode>
          <b>Your user ID: </b> {profile.userId}
          <EditPorfileFormRedux initialValues={profile} onSubmit={onSubmitForm} profile={profile}/>
        </Modal>
      </div>
  )
}

export default EditInfoModal;