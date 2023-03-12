import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store, {AppStateType} from './redux/store';

export const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    const state: AppStateType = store.getState()
    rerenderEntireTree(state)
})
