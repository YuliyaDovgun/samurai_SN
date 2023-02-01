import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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
export type dataType = {
    posts: postsType[]
    usersNames: userNameType[]
    messages: messagesType[]
}
const data: dataType = {
    posts: [
        {id: 1, message: 'Hello, word!', likesCount: 5},
        {id: 2, message: 'How are your?', likesCount: 10},
        {id: 3, message: 'Wonderful day', likesCount: 15},
    ],
    usersNames: [
        {name: 'Sveta', id: '1'},
        {name: 'Lena', id: '2'},
        {name: 'Vika', id: '3'},
        {name: 'Natasha', id: '4'},
    ],
    messages: [
        {id: 1, message:'Hello!'},
        {id: 2, message:'How are you'},
        {id: 3, message:'My boss is jerk'},
    ],
}

ReactDOM.render(
    <App data={data}/>,
  document.getElementById('root')
);