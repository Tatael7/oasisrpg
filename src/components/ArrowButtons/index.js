import React from "react";
import ArrowLeft from "../ArrowLeft";
import ArrowUp from "../ArrowUp";
import ArrowRight from "../ArrowRight";


function ArrowButtons () {
    return(
<div className="container">
    <div className="row">
        <ArrowUp/>
    </div>
    <div className="row">
        <ArrowLeft/>
        <ArrowRight/>
    </div>
    </div>
    );
}

export default ArrowButtons

