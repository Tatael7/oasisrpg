import React from "react";
import Picture from "./arrowUp.jpg"

function ArrowUp (props) {
    return (
        <button 
            id="arrowUp"
            onClick={props.handleClickUp}
        >
            <img src={Picture} alt="arrow up" width="50"/>
        </button>
    );
}

export default ArrowUp;