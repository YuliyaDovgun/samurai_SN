import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {postsType} from "../../../redux/state";

type PostsPropsType = {
    posts: postsType[]
    postText: string
    onAddPostHandler: (postText: string) => void
    onChangePostTextHandler: (postText: string) => void
}

export function Posts(props: PostsPropsType) {
    const postsElement = props.posts.map(p =>
        <Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPostHandler = () => {
        props.onAddPostHandler(props.postText)
    }
    const changePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangePostTextHandler(e.currentTarget.value)
    }

    return <div>
        <div>
            <textarea placeholder={'Send your messages'} value={props.postText}
                      onChange={changePostTextHandler}/>
            <button onClick={addPostHandler}>Send</button>
        </div>
        {postsElement}
    </div>
}
