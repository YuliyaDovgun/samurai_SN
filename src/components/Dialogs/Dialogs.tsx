import React from "react"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import s from "./Dialogs.module.css"
import {messagesPageType} from "../../redux/state";

type DialogsPropsType = {
    messagesPage: messagesPageType
}
export function Dialogs(props: DialogsPropsType) {

    return <div className={s.Dialogs}>
        <Dialog usersNames={props.messagesPage.usersNames}/>
        <Message messages={props.messagesPage.messages}/>
    </div>
}

