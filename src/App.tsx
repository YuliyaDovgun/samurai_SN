import React from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <div className={'common'}>
                    <Header/>
                    <Navbar/>
                    <div className={'content'}>
                        <Route path={'/profile'} component={Profile}/>
                        <Route path={'/dialogs'} component={Dialogs}/>
                        <Route path={'*'} component={NotFound}/>
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
