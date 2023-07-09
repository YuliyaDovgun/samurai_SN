import {v1} from "uuid";
import {addMessageActionType, setMessageTextActionType} from "./messagesPageReducer";
import {Dispatch} from "redux";
import {usersApi} from "../api/users-api";

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
        case 'PROFILE/ADD_POST': {
            state.postText = ''
            return {...state, posts: [{id: v1(), message: action.message, likesCount: 0}, ...state.posts]}
        }
        case 'PROFILE/SET_POST_TEXT': {
            return {...state, postText: action.message}
        }
        case 'PROFILE/SET_PROFILE_INFO': {
            return {...state, profileInfo: action.profileInfo}
        }
        default:
            return state
    }
}

export const addPostAC = (message: string) => ({
    type: 'PROFILE/ADD_POST', message
} as const)
export const setPostTextAC = (message: string) => ({
    type: 'PROFILE/SET_POST_TEXT', message
} as const)
export const setProfileInfo = (profileInfo: profileInfoType) => ({
    type: 'PROFILE/SET_PROFILE_INFO', profileInfo
} as const)

export const fetchProfileInfoTC = (userId: string) => (dispatch: Dispatch) => {
    usersApi.getProfileInfo(userId)
        .then(response => {
            dispatch(setProfileInfo(response))
        })
}

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

export type addPostActionType = ReturnType<typeof addPostAC>
export type setPostTextActionType = ReturnType<typeof setPostTextAC>
export type setProfileInfoActionType = ReturnType<typeof setProfileInfo>

export type profilePageActionType =
    addPostActionType
    | setPostTextActionType
    | addMessageActionType
    | setMessageTextActionType
    | setProfileInfoActionType
