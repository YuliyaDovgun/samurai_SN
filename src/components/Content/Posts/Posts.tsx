import React from "react";
import {Post} from "./Post/Post";

export function Posts() {
    return <div>
        <div>
            <textarea placeholder={'Send your messages'}/>
            <button>Send</button>
        </div>
        <Post/>
        <Post/>
        <Post/>
    </div>
}
