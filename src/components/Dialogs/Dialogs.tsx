import React from "react"
import s from "./Dialogs.module.css"
import {MessageContainer} from "./Message/MessageContainer";
import {DialogContainer} from "./Dialog/DialogContainer";

export function Dialogs() {
    return <div className={s.Dialogs}>
        <DialogContainer/>
        <MessageContainer/>
    </div>
}


