import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

export function Navbar() {
    return <div className={s.Navbar}>
        <nav>
            <div><NavLink to={'/'}>Profile</NavLink></div>
            <div><NavLink to={'/dialogs'}>Messages</NavLink></div>
            <div><NavLink to={'/news'}>News</NavLink></div>
            <div><NavLink to={'/music'}>Music</NavLink></div>
            <div><NavLink to={'/settings'}>Settings</NavLink></div>
            <div><NavLink to={'/friends'}>Friends</NavLink></div>
        </nav>
    </div>
}