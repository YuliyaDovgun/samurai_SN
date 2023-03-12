import React, {createContext} from "react";
import {storeType} from "./state";

export const Context = createContext({} as storeType)

export const Provider = (props: any) => {
    return <Context.Provider value={props.store}>
        {props.children}
    </Context.Provider>
}