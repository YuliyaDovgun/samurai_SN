import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, dataType, setPostText} from "./redux/state";

export const rerenderEntireTree = (state: dataType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} setPostText={setPostText}/>,
        document.getElementById('root')
    );
}