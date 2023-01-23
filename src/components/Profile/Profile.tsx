import React from "react";
import s from "./Profile.module.css"
import avatar from "../../media/avatar.jpg"
import {Posts} from "./Posts/Posts";

export function Profile() {
    return <div className={s.Profile}>
        <img alt={'avatar'} src={avatar}/>
        <div className={s.description}>
            Description
        </div>
        <Posts/>
    </div>
}

