import React from "react";
import Picture from "./download.png";

function ArrowLeft () {
    return (
        <button id="arrowRight">
            <img src={Picture} alt="arrow left" height="50" width="50"/>
        </button>
    );
}

export default ArrowLeft;