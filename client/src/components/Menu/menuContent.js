<<<<<<< HEAD
import React, { Component } from 'react'
import './menuContent.css';
import PropTypes from 'prop-types';
import Picture from "./logo.jpg";

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items = ["New Game", "Log In", "Leader Board"]
    for (let i=1; i<=0; i++) {
      this.items.push(i)
    }
  }

  render() {
    return (
      <div className="menu">
   <img src={Picture} alt="logo" height="300" width="100%"/>
        {this.items.map(i => <div className="menu-item" key={i}>
          <a
            href="https://github.com/Middlerun/cheeseburger-menu"
            onClick={this.props.closeCallback}
            target="_blank">
            {i}
          </a>
        </div>)}
      </div>
    )
  }
}
export default MenuContent;
=======
import React, { Component } from 'react'
import './menuContent.css';
import PropTypes from 'prop-types';
import Picture from "./logo.jpg";

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items = ["New Game", "Log In", "Leader Board"]
    for (let i=1; i<=0; i++) {
      this.items.push(i)
    }
  }

  render() {
    return (
      <div className="menu">
   <img src={Picture} alt="logo" height="300" width="100%"/>
        {this.items.map(i => <div className="menu-item" key={i}>
          <a
            href="https://github.com/Middlerun/cheeseburger-menu"
            onClick={this.props.closeCallback}
            target="_blank">
            {i}
          </a>
        </div>)}
      </div>
    )
  }
}
export default MenuContent;
>>>>>>> 33471270c859b74e778d2c6b950e75a9853aa142
