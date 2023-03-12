import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagesPageReducer} from "./messagesPageReducer";
import {storeType} from "./state";

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store: storeType = createStore(rootReducer)
export default store
