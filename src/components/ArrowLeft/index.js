import React from "react";
import Picture from "./arrowLeft.jpg";

function ArrowLeft () {
    return (
        <button id="arrowLeft">
            <img src={Picture} alt="arrow left" height="40" width="50"/>
        </button>
    );
}

export default ArrowLeft;