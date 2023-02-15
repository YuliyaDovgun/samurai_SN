import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, dataType, setMessageText, setPostText} from "./redux/state";

export const rerenderEntireTree = (state: dataType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             setPostText={setPostText}
             addMessage={addMessage}
             setMessageText={setMessageText}/>,
        document.getElementById('root')
    );
}