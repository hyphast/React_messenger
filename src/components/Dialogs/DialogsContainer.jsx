import DialogsCss from './Dialogs.module.css';
import Dialogs from "./Dialogs";
import React from "react";
import {addMessageCreator, updateMessageCreator} from "../../redux/dialogPageReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        DialogPage: state.DialogPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newMessageChange: (targetValue) => {
            dispatch(updateMessageCreator(targetValue));
        },
        newMessage: () => {
            dispatch(addMessageCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
