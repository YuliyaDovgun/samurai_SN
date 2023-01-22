import React from "react";
import s from "./Content.module.css"
import avatar from "../../media/avatar.jpg"

export function Content() {
    return <div className={s.Content}>
        <div>
            <img alt={'avatar'} src={avatar}/>
            <div className={s.description}>
                Description
            </div>
        </div>
        <div>
            <textarea placeholder={'Send your messages'}/>
            <button>Send</button>
        </div>
        <div>
            Posts
        </div>
    </div>
}