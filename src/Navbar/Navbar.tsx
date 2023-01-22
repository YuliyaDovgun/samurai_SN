import React from "react";
import "./Navbar.css"

export function Navbar() {
    return <div className={'Navbar'}>
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