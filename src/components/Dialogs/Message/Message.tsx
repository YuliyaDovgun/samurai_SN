import React from "react";
import s from './Message.module.css'
import {messagesType} from "../../../index";

type MessagePropsType = {
    messages: messagesType[]
}

export function Message(props: MessagePropsType) {
    return <div className={s.Message}>{props.messages.map(m => <div key={m.id}>{m.message}</div>)}</div>
}