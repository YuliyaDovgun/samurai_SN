import React from "react"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import s from "./Dialogs.module.css"

export function Dialogs() {
    const userNames = ['Sveta', 'Vika', 'Lena', 'Sasha', 'Yulia']
    const messages = ['Hello!', 'How are you', 'My boss is jerk']
    return <div className={s.Dialogs}>
        <Dialog userNames={userNames}/>
        <Message messages={messages}/>
    </div>
}

