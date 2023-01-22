import React from "react";
import logo from "../media/logo.png"
import "./Header.css"

export function Header() {
    return <div className={'Header'}>
        <header>
            <img alt={'logo'} src={logo}/>
        </header>
    </div>
}