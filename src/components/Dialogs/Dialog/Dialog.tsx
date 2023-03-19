import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialog.module.css"

type userNameType = {
    name: string
    id: string
}
type DialogPropsType = {
    usersNames: Array<userNameType>
}

export function Dialog(props: DialogPropsType) {
    return <div className={s.Dialog}>{props.usersNames.map(u => {
        return <div>
            <NavLink to={`/dialogs/${u.id}`}>{u.name}</NavLink>
        </div>})}
    </div>
    }