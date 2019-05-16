import React from "react";
import Picture from "./beastHarkonnen.gif";

function BeastHarkonnen (props) {
    return (
//holder changes overall position

//rotation
//foreground
//background
//<div class="background"></div>
//<div class=""></div>

<div class="opacity">
<div class="foreground">
        <div id="HarkonnenHolder">
            <div id="rotationHarkonnen"
            className={props.beastRotating ? "beastRotating" : "beastNotRotating"}
            >
                <div id="beastHarkonnen">
                <img src={require('./lightningOrange.gif')} id="lightningOrange" alt ="lightningOrange" height ="500" width="450" style={{
                        position:"fixed", zIndex:3,
                    
                        }} 
                        className={props.beastIsPulsing ? "beastIsPulsing" : "beastNotPulsing"        
                        } />
                    <img src={Picture} alt="Beast Harkonnen" height="500" width="450"
                    style={{
                        position:"fixed", zIndex:1,                
                        }} 
                    />
                </div>
            </div>
        </div>
    </div>
    
</div>
    );
}

export default BeastHarkonnen;