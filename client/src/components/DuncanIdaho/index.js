import React from "react";
import Picture from "../../img/duncanIdaho.gif";
import Power from "../../img/XSNu.gif";


function DuncanIdaho (props) {

    return (
         <div id="duncanIdaho">
              <img src={Power}
                id="powerUp"
                alt="power up"
                height="500"
                width="500"
                style={{
                    position: "absolute",
                    zIndex:2
                }}
                className={props.poweredUp ? "poweredUp" : "poweredNotUp"}        

             />
             {/* <img 
            src={require('../../img/fire-explosion-animation-2.gif')} 
            id="fireExplosion" alt ="fireExplosion" height ="500" width="450" 
            style={{
                position:"fixed", zIndex:5,
                    
            }} 
            className={props.fireExploding ? "fireExploding" : "fireNotExploding"        
            } 
            /> */}
            <img src={Picture} alt="Duncan Idaho" height="400"
                className={props.isAttacking ? "DuncanIdaho attacking" : "DuncanIdaho"}/>
            
        </div>
      
    );
}

export default DuncanIdaho;