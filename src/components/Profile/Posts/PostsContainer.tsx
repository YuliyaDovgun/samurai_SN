import React from "react";
import {actionType, profilePageType} from "../../../redux/state";
import {addPostAC, setPostTextAC} from "../../../redux/profilePageReducer";
import {Posts} from "./Posts";

type PostsPropsType = {
    profilePage: profilePageType
    dispatch: (action: actionType) => void
}
export function PostsContainer(props: PostsPropsType) {

    const onAddPostHandler = (postText: string) => {
        props.dispatch(addPostAC(postText))
    }
    const onChangePostTextHandler = (postText: string) => {
        props.dispatch(setPostTextAC(postText))
    }

    return <Posts posts={props.profilePage.posts}
                  postText={props.profilePage.postText}
                  onAddPostHandler={onAddPostHandler}
                  onChangePostTextHandler={onChangePostTextHandler}
    />
}
