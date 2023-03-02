import React from "react"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import s from "./Dialogs.module.css"
import {actionType, messagesPageType} from "../../redux/state";

type DialogsPropsType = {
    messagesPage: messagesPageType
    dispatch: (action: actionType) => void
}
export function Dialogs(props: DialogsPropsType) {

    return <div className={s.Dialogs}>
        <Dialog usersNames={props.messagesPage.usersNames}/>
        <Message messagesPage={props.messagesPage} dispatch={props.dispatch}/>
    </div>
}

