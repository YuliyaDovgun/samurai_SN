import React from 'react';
import './App.css';
import {Content} from "./Content/Content";
import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";

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
