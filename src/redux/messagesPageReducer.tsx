import {messagesPageType} from "./state";
import {v1} from "uuid";
import {addPostActionType, setPostTextActionType} from "./profilePageReducer";

export const ADD_MESSAGE = 'ADD-MESSAGE'
export const SET_MESSAGE_TEXT = 'SET_MESSAGE-TEXT'

export type addMessageActionType = {
    type: 'ADD-MESSAGE'
    message: string
}
export type setMessageTextActionType = {
    type: 'SET_MESSAGE-TEXT'
    message: string
}
export type messagesPageActionType = addMessageActionType | setMessageTextActionType | addPostActionType | setPostTextActionType

const initState: messagesPageType = {
    usersNames: [
        {name: 'Sveta', id: '1'},
        {name: 'Lena', id: '2'},
        {name: 'Vika', id: '3'},
        {name: 'Natasha', id: '4'},
    ],
    messageText: '',
    messages: [
        {id: '1', message: 'Hello!'},
        {id: '2', message: 'How are you'},
        {id: '3', message: 'My boss is jerk'},
    ],
}
export const messagesPageReducer = (state = initState, action: messagesPageActionType): messagesPageType => {
    switch (action.type){
        case ADD_MESSAGE: {
            state.messageText=''
            return {...state, messages: [{id: v1(), message: action.message}, ...state.messages]}
        }
        case SET_MESSAGE_TEXT: {
            return {...state, messageText: action.message}
        }
        default:
            return state
    }
}
export const addMessageAC = (message: string): addMessageActionType => ({
    type: ADD_MESSAGE, message
})
export const setMessageTextAC = (message: string): setMessageTextActionType => ({
    type: SET_MESSAGE_TEXT, message
})