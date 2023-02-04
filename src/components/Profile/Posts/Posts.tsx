import React from "react";
import {Post} from "./Post/Post";
import {profilePageType} from "../../../redux/state";

type PostsPropsType = {
    profilePage: profilePageType
    addPost: (postText: string | undefined) => void
}
export function Posts(props: PostsPropsType) {
    const textareaRef = React.createRef<HTMLTextAreaElement>()
    const postsElement = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onClickHandler = () => {
        const text = textareaRef.current?.value
        props.addPost(text)
    }

    return <div>
        <div>
            <textarea ref={textareaRef} placeholder={'Send your messages'}/>
            <button onClick={onClickHandler}>Send</button>
        </div>
        {postsElement}
    </div>
}
