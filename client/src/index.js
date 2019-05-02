import React from "react";
import ReactDOM from "react-dom";
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import Game from "./Game";
import Store from "./Store";
import LevelTest from "./LevelOne"

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/game">Game</Link>
                </li>
                <li>
                    <Link to="/store">Store</Link>
                </li>
                <li>
                    <Link to="/leveltest">Level</Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/store" component={Store}/>
            <Route exact path="/leveltest" component={LevelTest}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById("root"));

