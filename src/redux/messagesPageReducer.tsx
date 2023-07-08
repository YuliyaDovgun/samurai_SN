import {messagesPageType} from "./state";
import {v1} from "uuid";
import {addPostActionType, setPostTextActionType} from "./profilePageReducer";

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
        case 'MESSAGE/ADD_MESSAGE': {
            state.messageText=''
            return {...state, messages: [{id: v1(), message: action.message}, ...state.messages]}
        }
        case 'MESSAGE/SET_MESSAGE_TEXT': {
            return {...state, messageText: action.message}
        }
        default:
            return state
    }
}
export const addMessageAC = (message: string) => ({
    type: 'MESSAGE/ADD_MESSAGE', message
}as const)
export const setMessageTextAC = (message: string) => ({
    type: 'MESSAGE/SET_MESSAGE_TEXT', message
}as const)

export type addMessageActionType = ReturnType<typeof addMessageAC>
export type setMessageTextActionType = ReturnType<typeof setMessageTextAC>

export type messagesPageActionType = addMessageActionType
    | setMessageTextActionType
    | addPostActionType
    | setPostTextActionType
