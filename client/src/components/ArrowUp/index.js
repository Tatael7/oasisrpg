import React from "react";
import Picture from "./arrow.png"

function ArrowUp (props) {
    return (
        <button 
            id="arrowUp"
            onClick={props.handleClickUp}
        >
            <img src={Picture} alt="arrow up" height="50" width="50"/>
        </button>
    );
}

export default ArrowUp;