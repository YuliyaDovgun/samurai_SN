import React from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AppStateType} from "./redux/store";
import {actionType} from "./redux/state";

type AppPropsType = {
    state: AppStateType
    dispatch: (action: actionType) => void
}
function App(props: AppPropsType) {
    debugger
    return (
        <BrowserRouter>
            <div className={'App'}>
                <div className={'common'}>
                    <Header/>
                    <Navbar/>
                    <div className={'content'}>
                        <Switch>
                            <Route exact path={'/'} render={() => <Profile profilePage={props.state.profilePage}
                                                                           dispatch={props.dispatch}
                                                                           //dispatch={props.store.dispatch.bind(props.store)}
                            />}/>
                            <Route path={'/dialogs'} render={() => <Dialogs messagesPage={props.state.messagesPage}
                                                                            dispatch={props.dispatch}
                            />}/>
                            <Route render={() => <NotFound/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <div>404 Not found</div>
}

export default App;
