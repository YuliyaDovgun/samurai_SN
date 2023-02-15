import {rerenderEntireTree} from "../render";

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
const state: dataType = {
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
}

export const addPost = (postText: string | undefined) => {
    state.profilePage.posts.push({id: 4, message: postText, likesCount: 0})
    state.profilePage.postText = ''
    rerenderEntireTree(state)
}
export const addMessage = (messageText: string | undefined) => {
    state.messagesPage.messages.push({id: 4, message: messageText})
    state.messagesPage.messageText = ''
    rerenderEntireTree(state)
}
export const setPostText = (postText: string) => {
    state.profilePage.postText = postText
    rerenderEntireTree(state)
}
export const setMessageText = (messageText: string) => {
    state.messagesPage.messageText = messageText
    rerenderEntireTree(state)
}
export default state