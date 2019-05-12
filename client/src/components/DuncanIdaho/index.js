import React from "react";
import Picture from "./duncanIdaho.gif";
import "./DuncanIdaho.css"
import BattleMenu from "../BattleMenu"

function DuncanIdaho () {

    return (
        <div>
            <img src={Picture} alt="Duncan Idaho" height="300" width="300"/>
        </div>
    );
}

export default DuncanIdaho;


// var DuncanIdaho = React.createClass({
//   getInitialState: function() {
//     return {
//       clicked: false
//     };
//   },

//   handleClick: function() {
//     this.setState({clicked: true});
//   },

//   render: function() {
//     var className = this.state.clicked ? 'click-state' : 'base-state';
//     return <div className={className} onClick={this.handleClick}>click here</div>;
//   }
// });