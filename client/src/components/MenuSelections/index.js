import React from 'react';
import "./style.css";


function MenuSelect () {
    return (
        <div className="card">
            <ul id="menuul">
                <li>
                    <a href="/intro">New Game</a>
                </li>
                <li>
                    <a href="/Login">Login</a>
                </li>
                <li>
                <a href="/LeaderBoard">Leader Board</a>
                </li>
                <li>
                <a href="/Store">Item Shop</a>
                </li>
            </ul>
        </div>
    );
}


export default MenuSelect;
