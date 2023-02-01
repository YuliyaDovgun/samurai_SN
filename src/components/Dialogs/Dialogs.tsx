import React from "react"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import s from "./Dialogs.module.css"

export type userNameType = {
    name: string
    id: string
}
export type messagesType = {
    id: number
    message: string
}

export function Dialogs() {

    const usersNames: Array<userNameType> = [
        {name: 'Sveta', id: '1'},
        {name: 'Lena', id: '2'},
        {name: 'Vika', id: '3'},
        {name: 'Natasha', id: '4'},
    ]

    const messages: messagesType[] = [
        {id: 1, message:'Hello!'},
        {id: 2, message:'How are you'},
        {id: 3, message:'My boss is jerk'},
    ]

    return <div className={s.Dialogs}>
        <Dialog usersNames={usersNames}/>
        <Message messages={messages}/>
    </div>
}

