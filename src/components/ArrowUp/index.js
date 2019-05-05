import React from "react";
import Picture from "./arrowUp.jpg"

function ArrowUp () {
    return (
        <button id="arrowUp">
            <img src={Picture} alt="arrow up" height="50" width="40"/>
        </button>
    );
}

export default ArrowUp;