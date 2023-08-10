import React from "react";
import {addMessageAC, setMessageTextAC} from "../../../redux/messagesPageReducer";
import {Message} from "./Message";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";

const mapStateToProps = (state: AppStateType) => {
    return {
        messages: state.messagesPage.messages,
        messageText: state.messagesPage.messageText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChangeMessageText: (messageText: string) => dispatch(setMessageTextAC(messageText)),
        onAddMessage: (messageText: string) => dispatch(addMessageAC(messageText))
    }
}
export const MessageContainer = compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
    )(Message)
