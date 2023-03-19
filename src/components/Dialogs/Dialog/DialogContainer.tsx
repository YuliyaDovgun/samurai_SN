import {connect} from "react-redux";
import {Dialog} from "./Dialog";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        usersNames: state.messagesPage.usersNames
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}
export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)