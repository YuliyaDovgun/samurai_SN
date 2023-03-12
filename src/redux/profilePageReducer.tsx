import {profilePageType} from "./state";
import {v1} from "uuid";
import {addMessageActionType, setMessageTextActionType} from "./messagesPageReducer";

export const ADD_POST = 'ADD-POST'
export const SET_POST_TEXT = 'SET-POST-TEXT'

export type addPostActionType = {
    type: 'ADD-POST'
    message: string
}
export type setPostTextActionType = {
    type: 'SET-POST-TEXT'
    message: string
}
export type profilePageActionType = addPostActionType | setPostTextActionType | addMessageActionType | setMessageTextActionType

const initState: profilePageType =  {
    postText: '',
        posts: [
        {id: '1', message: 'Hello, word!', likesCount: 5},
        {id: '2', message: 'How are your?', likesCount: 10},
        {id: '3', message: 'Wonderful day', likesCount: 15},
    ],
}
export const profilePageReducer = (state = initState, action: profilePageActionType): profilePageType => {
    switch (action.type){
        case ADD_POST: {
            state.postText = ''
            return {...state, posts: [{id: v1(), message: action.message, likesCount: 0},...state.posts]}
        }
        case SET_POST_TEXT: {
            return {...state, postText: action.message}
        }
        default:
            return state
    }
}
export const addPostAC = (message: string): addPostActionType => ({
    type: ADD_POST, message
})
export const setPostTextAC = (message: string): setPostTextActionType => ({
    type: SET_POST_TEXT, message
})