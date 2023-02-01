import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialog.module.css"
import {userNameType} from "../../../index";

type DialogPropsType = {
    usersNames: Array<userNameType>
}

export function Dialog(props: DialogPropsType) {
    return <div className={s.Dialog}>{props.usersNames.map(u => <
        div><NavLink to={`/dialogs/${u.id}`}>{u.name}</NavLink></div>)}</div>
}