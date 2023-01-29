import React from "react"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import s from "./Dialogs.module.css"

export type userNameType = {
    name: string
    id: string
}

export function Dialogs() {
    const usersNames: Array<userNameType> = [{name: 'Sveta', id: '1'}, {name: 'Lena', id: '2'},
        {name: 'Vika', id: '3'}, {name: 'Natasha', id: '4'},]
    const messages = ['Hello!', 'How are you', 'My boss is jerk',]
    return <div className={s.Dialogs}>
        <Dialog usersNames={usersNames}/>
        <Message messages={messages}/>
    </div>
}

