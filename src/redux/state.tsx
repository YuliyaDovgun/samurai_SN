export type postsType = {
    id: number
    message: string
    likesCount: number
}
export type userNameType = {
    name: string
    id: string
}
export type messagesType = {
    id: number
    message: string
}
export type profilePageType = {
    posts: postsType[]
}
export type messagesPageType = {
    usersNames: userNameType[]
    messages: messagesType[]
}
export type dataType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
}
const state: dataType = {
    profilePage: {
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
        messages: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'My boss is jerk'},
        ],
    }
}
export default state