import React from 'react';
import './App.css';
import {Content} from "./components/Content/Content";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
    return (
        <div className={'App'}>
            <div className={'common'}>
                <Header/>
                <Navbar/>
                <Content/>
            </div>
        </div>
    );
}

export default App;
