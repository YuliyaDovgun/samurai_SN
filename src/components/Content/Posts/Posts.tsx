import React from "react";
import {Post} from "./Post/Post";

export function Posts() {
    return <div>
        <div>
            <textarea placeholder={'Send your messages'}/>
            <button>Send</button>
        </div>
        <Post message={'Hello, world!'} likesCount={5}/>
        <Post message={'How are your?'} likesCount={10}/>
        <Post message={'Wonderful day'} likesCount={2}/>
    </div>
}
