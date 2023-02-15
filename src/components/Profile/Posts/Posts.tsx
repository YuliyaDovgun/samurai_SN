import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {profilePageType} from "../../../redux/state";

type PostsPropsType = {
    profilePage: profilePageType
    addPost: (postText: string | undefined) => void
    setPostText: (postText: string) => void
}
export function Posts(props: PostsPropsType) {
    const postsElement = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onClickHandler = () => {
        props.addPost(props.profilePage.postText)
    }
    const onChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setPostText(e.currentTarget.value)
    }

    return <div>
        <div>
            <textarea placeholder={'Send your messages'} value={props.profilePage.postText} onChange={onChangePostText}/>
            <button onClick={onClickHandler}>Send</button>
        </div>
        {postsElement}
    </div>
}
