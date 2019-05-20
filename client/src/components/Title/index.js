import React from 'react';
import MenuTitle from "./titleMenu.png";
import "./style.css";

function Title () {
    return (
        <div id="titleDiv">
            <img src={MenuTitle} alt="Swordmasters of Ginaz" width="900px"/>
        </div>
    );
}


export default Title;