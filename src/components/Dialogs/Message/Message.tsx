import React from "react";
import s from './Message.module.css'

type MessagePropsType = {
    messages: Array<string>
}

export function Message(props: MessagePropsType) {
    return <div className={s.Message}>{props.messages.map(m => <div>{m}</div>)}</div>
}