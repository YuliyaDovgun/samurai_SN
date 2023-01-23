import React from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className={'App'}>
            <div className={'common'}>
                <Header/>
                <Navbar/>
                <div className={'content'}>
                   {/* <Profile/>*/}
                    <Dialogs/>
                </div>
            </div>
        </div>
    );
}

export default App;
