import React from "react";
import Picture from "./arrow.png"

function ArrowUp () {
    return (
        <button id="arrowUp">
            <img src={Picture} alt="arrow up" height="50" width="50"/>
        </button>
    );
}

export default ArrowUp;