import React, {ChangeEvent} from "react";
import s from './Message.module.css'
import {messagesPageType} from "../../../redux/state";

type MessagePropsType = {
    messagesPage: messagesPageType
    setMessageText: (messageText: string) => void
    addMessage: (messageText: string) => void
}

export function Message(props: MessagePropsType) {

    const messages = props.messagesPage.messages.map(m => <div key={m.id}>{m.message}</div>)

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setMessageText(e.currentTarget.value)
    }
    const onClickHandler = () => {
        props.addMessage(props.messagesPage.messageText)
    }
    return <div>
        <div>
            <textarea placeholder={'Send your messages'} value={props.messagesPage.messageText} onChange={onChangeMessageText}/>
            <button onClick={onClickHandler}>Send</button>
        </div>
        <div className={s.Message}>{messages}</div>
    </div>
}