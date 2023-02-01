import React from "react"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import s from "./Dialogs.module.css"
import {messagesType, userNameType} from "../../index";

type DialogsPropsType = {
    users: userNameType[]
    messages: messagesType[]
}
export function Dialogs(props: DialogsPropsType) {

    return <div className={s.Dialogs}>
        <Dialog usersNames={props.users}/>
        <Message messages={props.messages}/>
    </div>
}

