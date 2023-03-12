import React from "react";
import {addMessageAC, setMessageTextAC} from "../../../redux/messagesPageReducer";
import {Message} from "./Message";
import {Context} from "../../../redux/Context";

export function MessageContainer() {
return <Context.Consumer>
    {
        (store) => {
            const state = store.getState().messagesPage
            const onChangeMessageText = (messageText: string) => {
                store.dispatch(setMessageTextAC(messageText))
            }
            const onAddMessage = (messageText: string) => {
                store.dispatch(addMessageAC(messageText))
            }
            return <Message
                messages={state.messages}
                messageText={state.messageText}
                onChangeMessageText={onChangeMessageText}
                onAddMessage={onAddMessage}
            />
        }
    }
</Context.Consumer>

}