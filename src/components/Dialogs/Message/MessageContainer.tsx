import React from "react";
import {addMessageAC, setMessageTextAC} from "../../../redux/messagesPageReducer";
import {Message} from "./Message";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";

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
export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)