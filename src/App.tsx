import React from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {storeType} from "./redux/state";

type AppPropsType = {
    store: storeType
}
function App(props: AppPropsType) {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className={'App'}>
                <div className={'common'}>
                    <Header/>
                    <Navbar/>
                    <div className={'content'}>
                        <Switch>
                            <Route exact path={'/'} render={() => <Profile profilePage={state.profilePage}
                                                                           addPost={props.store.addPost.bind(props.store)}
                                                                           setPostText={props.store.setPostText.bind(props.store)}
                            />}/>
                            <Route path={'/dialogs'} render={() => <Dialogs messagesPage={state.messagesPage}
                                                                            addMessage={props.store.addMessage.bind(props.store)}
                                                                            setMessageText={props.store.setMessageText.bind(props.store)}
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
