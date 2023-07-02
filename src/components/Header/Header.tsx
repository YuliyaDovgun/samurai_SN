import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../media/logo.png"
import s from "./Header.module.css"

export function Header(props: HeaderPropsType) {
    return <div className={s.Header}>
        <header>
            <img alt={'logo'} src={logo}/>
            <NavLink to={'/login'} className={s.login}>{!props.isAuth ? "Login" : 'User Name'}</NavLink>
        </header>
    </div>
}
type HeaderPropsType = {
    isAuth: boolean
}