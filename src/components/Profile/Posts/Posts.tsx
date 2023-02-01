import React from "react";
import {Post} from "./Post/Post";

type postsType = {
    id: number
    message: string
    likesCount: number
}

export function Posts() {

    const posts: postsType[] = [
        {id: 1, message: 'Hello, word!', likesCount: 5},
        {id: 2, message: 'How are your?', likesCount: 10},
        {id: 3, message: 'Wonderful day', likesCount: 15},
    ]
    const postsElement = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return <div>
        <div>
            <textarea placeholder={'Send your messages'}/>
            <button>Send</button>
        </div>
        {postsElement}
    </div>
}
