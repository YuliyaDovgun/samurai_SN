import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store, {dataType} from "./redux/state";

const state = store.getState()
export const rerenderEntireTree = (state: dataType) => {

    ReactDOM.render(
        <App store = {store}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
store.subscriber(rerenderEntireTree)