import {v1} from "uuid";
import {addMessageActionType, setMessageTextActionType} from "./messagesPageReducer";

export const ADD_POST = 'ADD-POST'
export const SET_POST_TEXT = 'SET-POST-TEXT'
export const SET_PROFILE_INFO = 'SET_PROFILE_INFO'

export type addPostActionType = {
    type: 'ADD-POST'
    message: string
}
export type setPostTextActionType = {
    type: 'SET-POST-TEXT'
    message: string
}
export type setProfileInfoActionType = {
    type: 'SET_PROFILE_INFO'
    profileInfo: profileInfoType
}
export type profilePageActionType =
    addPostActionType
    | setPostTextActionType
    | addMessageActionType
    | setMessageTextActionType
    | setProfileInfoActionType
type postType = {
    id: string
    message: string
    likesCount: number
}
export type profileInfoType = {
    aboutMe?: string
    userId: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: {}
    photos: {
        small?: string,
        large?: string
    }
}
export type initStateType = {
    postText: string
    posts: postType[]
    profileInfo: profileInfoType | null
}
const initState: initStateType = {
    postText: '',
    posts: [
        {id: '1', message: 'Hello, word!', likesCount: 5},
        {id: '2', message: 'How are your?', likesCount: 10},
        {id: '3', message: 'Wonderful day', likesCount: 15},
    ],
    profileInfo: null
}
export const profilePageReducer = (state = initState, action: profilePageActionType): initStateType => {
    switch (action.type) {
        case ADD_POST: {
            state.postText = ''
            return {...state, posts: [{id: v1(), message: action.message, likesCount: 0}, ...state.posts]}
        }
        case SET_POST_TEXT: {
            return {...state, postText: action.message}
        }
        case SET_PROFILE_INFO: {
            return {...state, profileInfo: action.profileInfo}
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
export const setProfileInfo = (profileInfo: profileInfoType): setProfileInfoActionType => ({
    type: SET_PROFILE_INFO, profileInfo
})