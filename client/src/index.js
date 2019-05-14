import React from "react";
import ReactDOM from "react-dom";
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import Game from "./Game";
import Store from "./Store";
import LevelOneOne from "./LevelOne";
import Game2 from "./Game2";
import MenuCurtain from "./components/MenuCurtain";

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <MenuCurtain/>
//             </div>
//         )
//     };
// }

const routing = (
    <Router>
        <div>
        <MenuCurtain/>
            <ul>
                <li>
                    <Link to="/game">Game</Link>
                </li>
                <li>
                    <Link to="/game2">Game2</Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/store" component={Store}/>
            <Route exact path="/leveloneone" component={LevelOneOne}/>
            <Route exact path="/game2" component={Game2}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById("root"));

