import React from "react";
import modalStyles from "./Modal.module.css";

export const Modal = ({
    title, isOpen, onCancel, onSubmit, children
}) => {
    return (
    <div className={modalStyles.modalOverlay}>
        <div className={modalStyles.modalWindow}>
            <div className={modalStyles.modalHeader}>

            </div>
             <div className={modalStyles.modalBody}>

            </div>
             <div className={modalStyles.modalFooter}>

            </div>
        </div>
    </div>
    )
}