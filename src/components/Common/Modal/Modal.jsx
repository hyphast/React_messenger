import React from "react";
import PropTypes from "prop-types";
import modalStyles from "./Modal.module.scss";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import classnames from "classnames";
import Portal from "../Portal/Portal";

export const Modal = ({
    title, isOpen, onCancel, onSubmit, children, className, editMode
}) => {
    return (
    <>
        {isOpen &&
        <Portal>
            <div className={modalStyles.modalOverlay}>
                <div className={classnames(modalStyles.modalWindow, className )}>
                    <div className={modalStyles.modalHeader}>
                        <div className={modalStyles.title}>{title}</div>
                        <Icon name={faTimes} onClick={onCancel}/>
                    </div>
                    <div className={modalStyles.modalBody}>
                        {children}
                    </div>
                    <div className={modalStyles.modalFooter}>
                      {editMode ? null: <Button onClick={onSubmit}>Submit</Button> }
                        <Button onClick={onCancel}>Cancel</Button>
                    </div>
                </div>
            </div>
        </Portal>
        }
    </>
    )
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  editMode: PropTypes.bool,
  className: PropTypes.string
}

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
  children: null,
  onSubmit: () => {},
  editMode: false,
  className: ''
}

export default Modal;