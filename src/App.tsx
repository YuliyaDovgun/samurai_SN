import React from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { UsersContainer } from './components/Users/UsersContainer';

function App() {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <div className={'common'}>
                    <Header/>
                    <Navbar/>
                    <div className={'content'}>
                        <Switch>
                            <Route exact path={'/'} render={() => <Profile/>}/>
                            <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
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
