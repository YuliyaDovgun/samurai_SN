import React from 'react';
import './index.css';
import state, {addMessage, addPost, dataType, setMessageText, setPostText, subscriber} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

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
rerenderEntireTree(state)
subscriber(rerenderEntireTree)