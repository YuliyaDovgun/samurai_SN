import {profilePageActionType, profilePageReducer} from "./profilePageReducer";
import {messagesPageActionType, messagesPageReducer} from "./messagesPageReducer";

export type postsType = {
    id: string
    message: string | undefined
    likesCount: number
}
export type userNameType = {
    name: string
    id: string
}
export type messagesType = {
    id: string
    message: string | undefined
}
export type profilePageType = {
    postText: string
    posts: postsType[]
}
export type messagesPageType = {
    usersNames: userNameType[]
    messageText: string
    messages: messagesType[]
}
export type dataType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
}
export type actionType = profilePageActionType | messagesPageActionType

export type storeType = {
    _state: dataType
    _callSubscriber: (state: dataType) => void


    getState: () => dataType
    setState: (newState: { store: storeType }) => void

    subscribe: (observer: (state: dataType) => void) => void

    dispatch: (action: actionType) => void
}

const store: storeType = {
    _state: {
        profilePage: {
            postText: '',
            posts: [
                {id: '1', message: 'Hello, word!', likesCount: 5},
                {id: '2', message: 'How are your?', likesCount: 10},
                {id: '3', message: 'Wonderful day', likesCount: 15},
            ],
        },
        messagesPage: {
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
    },
    getState() {
        return this._state
    },
    setState(newState: any) {
        this._state = newState
    },
    _callSubscriber(state: dataType) {
        console.log(state)
    },
    subscribe(observer: (state: dataType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: actionType) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)
    }
}

export default store