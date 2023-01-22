import React from "react";
import logo from "../../media/logo.png"
import s from "./Header.module.css"

export function Header() {
    return <div className={s.Header}>
        <header>
            <img alt={'logo'} src={logo}/>
        </header>
    </div>
}