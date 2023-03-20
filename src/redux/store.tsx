import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {messagesPageReducer} from "./messagesPageReducer";
import {usersReducer} from "./usersReducer";

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    users: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)
export default store
