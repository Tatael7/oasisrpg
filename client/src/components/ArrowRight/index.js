import React from "react";
import Picture from "./arrowRight.jpg";

function ArrowRight (props) {
    return (
        <button 
            id="arrowRight"
            onClick={props.handleClickRight}
        >
            <img src={Picture} alt="arrow right" height="50"/>
        </button>
    );
}

export default ArrowRight;