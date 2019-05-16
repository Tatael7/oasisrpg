import React from "react";
import Picture from "./sardaukarGrunt.gif";

function SardaukarGrunt (props) {
    return (
        <div id="GruntHolder" style={{position:"relative"}}>
        <div id="sardaukarGrunt">
        <img src={require('./slashPlayer.gif')} alt ="Slash" height ="300" width="300" style={{
            position:"fixed", zIndex:3,

             }} 
            className={props.EnemyIsPulsing ? "enemyIsPulsing" : "enemyNotPulsing"        
            } />
            <img src={Picture} alt="Sardaukar Grunt" height="300" width="300" className={props.EnemyIsAttacking ? "SardaukarGrunt attacking" : "SardaukarGrunt"}/>
        </div>
    </div>
    );
}

export default SardaukarGrunt;