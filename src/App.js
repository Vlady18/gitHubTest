import './App.css';
import {UserLists} from "./Components/UserLists";
import {ListContextProvider} from "./Context/UsersContext";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Profile} from "./Components/Profile";
import * as React from "react";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ListContextProvider>
                    <Switch>
                        <Route exact render={() => (<UserLists/>)} path={'/'}/>
                        <Route exact render={() => (<Profile/>)} path={'/profile/:userName'}/>
                        <Route render={() => (<h1>Not found</h1>)}/>
                    </Switch>
                </ListContextProvider>
            </BrowserRouter>

        </div>
    );
}

export default App;
