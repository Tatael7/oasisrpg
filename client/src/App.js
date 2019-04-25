// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import newGame from './components/newGame';
import logIn from './components/logIn';
import leaderBoard from './components/leaderBoard';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Swordmaster of Ginaz</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Menu </Link></li>
            <li><Link to={'/leaderBoard'} className="nav-link">Leader Board</Link></li>
            <li><Link to={'/about'} className="nav-link">Log In</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Menu} />
              <Route exact path='/newGame' component={newGame} />
              <Route path='/logIn' component={logIn} />
              <Route path='/leaderBoard' component={leaderBoard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
{/*
___                           ______                                          __ _   _____ 
|_  |                          | ___ \                                        / _| | |____ |
  | | __ _ _ __ ___   ___  ___ | |_/ /__ ___   _____ _ __  ___  ___ _ __ ___ | |_| |_    / /
  | |/ _` | '_ ` _ \ / _ \/ __||    // _` \ \ / / _ \ '_ \/ __|/ __| '__/ _ \|  _| __|   \ \
/\__/ / (_| | | | | | |  __/\__ \| |\ \ (_| |\ V /  __/ | | \__ \ (__| | | (_) | | | |_.___/ /
\____/ \__,_|_| |_| |_|\___||___/\_| \_\__,_| \_/ \___|_| |_|___/\___|_|  \___/|_|  \__\____/ 
                                                                                            
*/}                                                                                          

