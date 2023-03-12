import React from "react";
import {addPostAC, setPostTextAC} from "../../../redux/profilePageReducer";
import {Posts} from "./Posts";
import {Context} from "../../../redux/Context";

export function PostsContainer() {
   return <Context.Consumer>
        {
        (store) => {
            const state = store.getState().profilePage
            const onAddPostHandler = (postText: string) => {
                store.dispatch(addPostAC(postText))
            }
            const onChangePostTextHandler = (postText: string) => {
                store.dispatch(setPostTextAC(postText))
            }

            return <Posts posts={state.posts}
                          postText={state.postText}
                          onAddPostHandler={onAddPostHandler}
                          onChangePostTextHandler={onChangePostTextHandler}
            />
        }
    }</Context.Consumer>

}
