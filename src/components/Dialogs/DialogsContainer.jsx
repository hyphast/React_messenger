import Dialogs from "./Dialogs";
import React from "react";
import {addMessageCreator, updateMessageCreator} from "../../redux/dialogPageReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        DialogPage: state.DialogPage,
        isAuth: state.auth.isAuth,
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
