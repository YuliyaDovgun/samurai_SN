import React from "react";
import s from "./Content.module.css"
import avatar from "../../media/avatar.jpg"
import {Posts} from "./Posts/Posts";

export function Content() {
    return <div className={s.Content}>
        <img alt={'avatar'} src={avatar}/>
        <div className={s.description}>
            Description
        </div>
        <Posts/>
    </div>
}

