import React from "react";
import Picture from "./arrowRight.png";

function ArrowRight () {
    return (
        <button id="arrowRight">
            <img src={Picture} alt="arrow right" height="50" width="50"/>
        </button>
    );
}

export default ArrowRight;