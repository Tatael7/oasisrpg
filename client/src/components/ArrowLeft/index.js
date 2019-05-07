import React from "react";
import Picture from "./download.png";

function ArrowLeft (props) {
    return (
        <button 
            id="arrowRight"
            onClick={props.handleClickLeft}
        >
            <img src={Picture} alt="arrow left" height="50" width="50"/>
        </button>
    );
}

export default ArrowLeft;