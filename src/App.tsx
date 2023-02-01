import React from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {dataType} from "./index";

type AppPropsType = {
    data: dataType
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
                            <Route exact path={'/'} render={() => <Profile posts={props.data.posts}/>}/>
                            <Route path={'/dialogs'} render={() => <Dialogs users={props.data.usersNames} messages={props.data.messages}/>}/>
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
