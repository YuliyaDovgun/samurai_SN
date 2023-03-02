/*let rerenderEntireTree = (state: dataType) => {
    console.log(state)
}*/
const ADD_POST = 'ADD-POST'
const SET_POST_TEXT = 'SET-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const SET_MESSAGE_TEXT = 'SET_MESSAGE-TEXT'

export type postsType = {
    id: number
    message: string | undefined
    likesCount: number
}
export type userNameType = {
    name: string
    id: string
}
export type messagesType = {
    id: number
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
export type actionType = {
    type: string
    text?: string
}
export type storeType = {
    _state: dataType

    getState: () => dataType
    setState: (newState: { store: storeType }) => void

    rerenderEntireTree: (state: dataType) => void
    subscriber: (observer: (state: dataType) => void) => void

    dispatch: (action: actionType) => void
}

const store: storeType = {
    _state: {
        profilePage: {
            postText: '',
            posts: [
                {id: 1, message: 'Hello, word!', likesCount: 5},
                {id: 2, message: 'How are your?', likesCount: 10},
                {id: 3, message: 'Wonderful day', likesCount: 15},
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
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'My boss is jerk'},
            ],
        }
    },
    getState() {
        return this._state
    },
    setState(newState: any) {
        this._state = newState
    },
    rerenderEntireTree(state: dataType) {
        console.log(state)
    },
    subscriber(observer: (state: dataType) => void) {
        this.rerenderEntireTree = observer
    },
    dispatch(action: actionType) {
        if (action.type === ADD_POST) {
            this._state.profilePage.posts.push({id: 4, message: action.text, likesCount: 0})
            this._state.profilePage.postText = ''
            this.rerenderEntireTree(this._state)
        } else if (action.type === ADD_MESSAGE) {
            this._state.messagesPage.messages.push({id: 4, message: action.text})
            this._state.messagesPage.messageText = ''
            this.rerenderEntireTree(this._state)
        } else if (action.type === SET_POST_TEXT) {
            if (action.text) {
                this._state.profilePage.postText = action.text
                this.rerenderEntireTree(this._state)
            }
        } else if (action.type === SET_MESSAGE_TEXT) {
            if (action.text) {
                this._state.messagesPage.messageText = action.text
                this.rerenderEntireTree(this._state)
            }
        }
    }
}
export const addPostAC = (text: string) => ({type: ADD_POST, text})
export const setPostAC = (text: string) => ({type: SET_POST_TEXT, text})
export const addMessageAC = (text: string) => ({type: ADD_MESSAGE, text})
export const setMessageAC = (text: string) => ({type: SET_MESSAGE_TEXT, text})

export default store