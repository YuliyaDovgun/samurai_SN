import React from "react";
import s from "./Navbar.module.css"

export function Navbar() {
    return <div className={s.Navbar}>
        <nav>
            <div><a href={'Profile'}>Profile</a></div>
            <div><a href={'Messages'}>Messages</a></div>
            <div><a href={'News'}>News</a></div>
            <div><a href={'Music'}>Music</a></div>
            <div><a href={'Settings'}>Settings</a></div>
            <div><a href={'Friends'}>Friends</a></div>
        </nav>
    </div>
}