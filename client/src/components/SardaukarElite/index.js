import React from "react";
import Picture from "./sardaukar.gif";

function SardaukarElite (props) {
    return (
        <div id="sardaukarElite">
            <img src={Picture} alt="Sardaukar Elite" height="300" width="300" className={props.isAttacking ? "SardaukarElite attacking" : "SardaukarElite"}/>
        </div>
    );
}

export default SardaukarElite;