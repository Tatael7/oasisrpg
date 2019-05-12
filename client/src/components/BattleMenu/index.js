import React, {useState} from "react";
import ArrowLeft from "../ArrowLeft";
import ArrowUp from "../ArrowUp";
import ArrowRight from "../ArrowRight";
import { Container } from "../Grid";
import DuncanIdaho from "../DuncanIdaho";
import SardaukarGrunt from "../SardaukarGrunt";
import "./styles.css";

// let duncanIdaho = {
//     shields: 600
// }

// let enemy = {
//     shields: 500
// }

function BattleMenu(props) {
    return (
        <div>


            <div className="container BattleMenuContainer alert alert-primary">
                <div className="row">
                    <div>
                       <button className="btn btn-warning"onclick={props.AttackHandler}>Attack</button>
                       <button className="btn btn-dangers"onclick={props.AttackHandler2}>Pulse Attack</button>
                        </div>
                     <div className="col-sm-3">
                     <h4 classname="DuncanBattleMenuHeader">Duncan Idaho</h4><br></br>
                     <div className='status-bar' style={{width: props.shield + 'px'}}></div>
                    Shields: {props.playerShields}<br></br>
                    Attack: {props.playerAttack}
                    </div>
                
             
                    <div className="col-sm-3"> <div className="row">
                        <div className="ArrowContainer">
                            <div className="UpArrowRow">
                                <ArrowUp className={ArrowUp}/>
                            </div>
                             <div className="row">
                                <ArrowLeft/>
                                <ArrowRight/>
                                </div>

                            </div>
                         


                        </div>
                     </div>
                     <div className="row">
                                <div className="col-sm">
                                Enemy Stats<br></br>
                                Shields: {props.newEnemyShield}<br></br>
                                Attack: {props.enemyAttack}<br></br>
                    {/* Attack: {props.AttackHandler} */}
                                </div>
                                </div>
  </div>
            </div>
         </div>
        
 
    );
}

export default BattleMenu;
