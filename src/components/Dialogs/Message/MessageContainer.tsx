import React from "react";
import {actionType, messagesPageType} from "../../../redux/state";
import {addMessageAC, setMessageTextAC} from "../../../redux/messagesPageReducer";
import {Message} from "./Message";

type MessagePropsType = {
    messagesPage: messagesPageType
    dispatch: (action: actionType) => void
}

export function MessageContainer(props: MessagePropsType) {

    const onChangeMessageText = (messageText: string) => {
        props.dispatch(setMessageTextAC(messageText))
    }
    const onAddMessage = (messageText: string) => {
        props.dispatch(addMessageAC(messageText))
    }
    return <Message
    messages={props.messagesPage.messages}
    messageText={props.messagesPage.messageText}
    onChangeMessageText={onChangeMessageText}
    onAddMessage={onAddMessage}
    />
}