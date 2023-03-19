import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store, {AppStateType} from './redux/store';
import { Provider } from 'react-redux';

export const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    const state: AppStateType = store.getState()
    rerenderEntireTree(state)
})
