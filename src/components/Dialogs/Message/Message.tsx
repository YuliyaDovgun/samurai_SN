import React, {ChangeEvent} from "react";
import s from './Message.module.css'
import {messagesType} from "../../../redux/state";

type MessagePropsType = {
    messages: messagesType[]
    messageText: string
    onChangeMessageText: (messageText: string) => void
    onAddMessage: (messageText: string) => void
}

export function Message(props: MessagePropsType) {

    const messages = props.messages.map(m => <div key={m.id}>{m.message}</div>)

    const changeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessageText(e.currentTarget.value)
    }
    const addMessageHandler = () => {
        props.onAddMessage(props.messageText)
    }
    return <div>
        <div>
            <textarea placeholder={'Send your messages'} value={props.messageText}
                      onChange={changeMessageTextHandler}/>
            <button onClick={addMessageHandler}>Send</button>
        </div>
        <div className={s.Message}>{messages}</div>
    </div>
}