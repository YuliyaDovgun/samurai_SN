import React from "react";
import post_avatar from "./../../../../media/post_avatar.png"
import s from "./Post.module.css"

export function Post() {
    return <div className={s.Post}>
        <img className={s.postImg} alt={'avatar'} src={post_avatar}/>
        <div className={s.post}>
            <span className={s.postMessage}>post message</span>
            <span className={s.postLiked}>likes</span>
        </div>
    </div>
}