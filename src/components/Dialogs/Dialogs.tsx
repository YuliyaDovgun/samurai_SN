import React from "react"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import s from "./Dialogs.module.css"
import {messagesPageType} from "../../redux/state";

type DialogsPropsType = {
    messagesPage: messagesPageType
    setMessageText: (messageText: string) => void
    addMessage: (messageText: string) => void
}
export function Dialogs(props: DialogsPropsType) {

    return <div className={s.Dialogs}>
        <Dialog usersNames={props.messagesPage.usersNames}/>
        <Message messagesPage={props.messagesPage} addMessage={props.addMessage} setMessageText={props.setMessageText}/>
    </div>
}

