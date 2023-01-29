import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css"

type DialogPropsType = {
    userNames: Array<string>
}

export function Dialog(props: DialogPropsType) {
    return <div className={s.Dialog}>{props.userNames.map(u => <div><NavLink to={`/${u}`}>{u}</NavLink></div>)}</div>
}