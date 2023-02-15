import React from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {dataType} from "./redux/state";

type AppPropsType = {
    state: dataType
    addPost: (postText: string | undefined) => void
    setPostText: (postText: string) => void
    setMessageText: (messageText: string) => void
    addMessage: (messageText: string) => void
}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <div className={'common'}>
                    <Header/>
                    <Navbar/>
                    <div className={'content'}>
                        <Switch>
                            <Route exact path={'/'} render={() => <Profile profilePage={props.state.profilePage}
                                                                           addPost={props.addPost}
                                                                           setPostText={props.setPostText}
                            />}/>
                            <Route path={'/dialogs'} render={() => <Dialogs messagesPage={props.state.messagesPage}
                                                                            addMessage={props.addMessage}
                                                                            setMessageText={props.setMessageText}
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
