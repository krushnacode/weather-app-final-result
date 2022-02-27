import Page from './components/Page';
import Register from "./components/register/register"
import Login from "./components/login/login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
    const [user, setLoginUser] = useState({})
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/weather">
                        <Page />
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
