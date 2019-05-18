import React from "react";
import Picture from "../../img/duncanIdaho.gif";

function DuncanIdaho (props) {

    return (
        <div DuncanIdahoHolder style={{position:"relative"}} >
        {/* <div style={{
            // backgroundColor: 'rgba(52, 52, 52, alpha)',
            // backgroundColor: "transparent"
            }}>
            <img src={require('./slashPlayer1.gif')} alt ="Slash" height ="300" width="300" style={{
                position:"fixed", zIndex:3,
                // opacity: 5
                // backgroundColor: "alpha",
                // backgroundColor: "transparent",
                // opacity:"50%"
            }} 
                className={props.isPulsing ? "pulsing" : "notPulsing"        
        } /></div> */}

            <img src={Picture} alt="Duncan Idaho" height="300" width="300" style={{
            position:"fixed", zIndex:-1}} className={props.isAttacking ? "DuncanIdaho attacking" : "DuncanIdaho"}/>
        </div>
    );
}

export default DuncanIdaho;