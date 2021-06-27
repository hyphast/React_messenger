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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {newMessage: addMessage})
)(Dialogs);

