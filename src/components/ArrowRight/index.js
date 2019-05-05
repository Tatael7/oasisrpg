import React from "react";
import Picture from "./arrowRight.jpg";

function ArrowRight () {
    return (
        <button id="arrowRight">
            <img src={Picture} alt="arrow right" height="40" width="50"/>
        </button>
    );
}

export default ArrowRight;