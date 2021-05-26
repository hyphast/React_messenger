import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/dialogReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        DialogPage: state.DialogPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newMessage: (message) => {
            dispatch(addMessage(message));
        },
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

