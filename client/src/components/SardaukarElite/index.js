import React from "react";
import Picture from "../../img/sardaukarElite.gif";

function SardaukarElite (props) {
    return (
        <div id="sardaukarElite">
            <img src={Picture} alt="Sardaukar Elite" height="650" className={props.isAttacking ? "SardaukarElite attacking" : "SardaukarElite"}/>
        </div>
    );
}

export default SardaukarElite;