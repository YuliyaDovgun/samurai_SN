import React from "react";
import {Post} from "./Post/Post";
import {postsType} from "../../../index";

type PostsPropsType = {
    posts: postsType[]
}
export function Posts(props: PostsPropsType) {

    const postsElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return <div>
        <div>
            <textarea placeholder={'Send your messages'}/>
            <button>Send</button>
        </div>
        {postsElement}
    </div>
}
