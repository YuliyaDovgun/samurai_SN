import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {actionType, profilePageType} from "../../../redux/state";
import {addPostAC, setPostTextAC} from "../../../redux/profilePageReducer";

type PostsPropsType = {
    profilePage: profilePageType
    dispatch: (action: actionType) => void
}
export function Posts(props: PostsPropsType) {
    const postsElement = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onClickHandler = () => {
        props.dispatch(addPostAC(props.profilePage.postText))
        props.profilePage.postText = ''
    }
    const onChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(setPostTextAC(e.currentTarget.value))
    }

    return <div>
        <div>
            <textarea placeholder={'Send your messages'} value={props.profilePage.postText} onChange={onChangePostText}/>
            <button onClick={onClickHandler}>Send</button>
        </div>
        {postsElement}
    </div>
}
