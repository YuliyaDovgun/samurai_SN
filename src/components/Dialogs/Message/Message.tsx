import React, {ChangeEvent} from "react";
import s from './Message.module.css'
import {actionType, messagesPageType} from "../../../redux/state";
import {addMessageAC, setMessageTextAC} from "../../../redux/messagesPageReducer";

type MessagePropsType = {
    messagesPage: messagesPageType
    dispatch: (action: actionType) => void
}

export function Message(props: MessagePropsType) {

    const messages = props.messagesPage.messages.map(m => <div key={m.id}>{m.message}</div>)

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(setMessageTextAC(e.currentTarget.value))
    }
    const onClickHandler = () => {
        props.dispatch(addMessageAC(props.messagesPage.messageText))
    }
    return <div>
        <div>
            <textarea placeholder={'Send your messages'} value={props.messagesPage.messageText} onChange={onChangeMessageText}/>
            <button onClick={onClickHandler}>Send</button>
        </div>
        <div className={s.Message}>{messages}</div>
    </div>
}