import React from "react";
import post_avatar from "./../../../../media/post_avatar.png"
import s from "./Post.module.css"

type PostPropsType = {
    id: string
    message: string | undefined
    likesCount: number
}
export function Post(props: PostPropsType) {
    return <div className={s.Post}>
        <img className={s.postImg} alt={'avatar'} src={post_avatar}/>
        <div className={s.post}>
            <span className={s.postMessage}>{props.message}</span>
            <span className={s.postLiked}>{props.likesCount} likes</span>
        </div>
    </div>
}