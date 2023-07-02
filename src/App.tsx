import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <div className={'common'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'content'}>
                        <Switch>
                            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
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
