import React from "react";
import Picture from "./duncanIdaho.gif";

function DuncanIdaho (props) {

    return (
        <div>
            <img src={Picture} alt="Duncan Idaho" height="300" width="300" className={props.isAttacking ? "DuncanIdaho attacking" : "DuncanIdaho"}/>
        </div>
    );
}

export default DuncanIdaho;