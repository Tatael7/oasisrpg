import React from "react";
import ArrowLeft from "../ArrowLeft";
import ArrowUp from "../ArrowUp";
import ArrowRight from "../ArrowRight";


function BattleMenu(props)  {
   
    return (
        <div className="alert alert-primary">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button 
                            className="btn btn-warning"
                            onClick={props.normalAttack}
                        >
                        Attack
                        </button>
                        <button 
                            className="btn btn-danger"
                            onClick={props.pulseAttack}
                        >Pulse Attack </button>
                    </div>
                    <div className="col-sm-3">
                        <ul className="playerStats">
                           <li>Shields: {props.playerShields}</li>
                           {/* <li>Attack: {props.playerAttack}</li> */}
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <div className="container">
                            <div className="row">
                                <ArrowUp
                                    {...props}
                                    handleClickUp={props.handleClickUp}
                                />
                            </div>
                            <div className="row">
                                <ArrowLeft
                                    {...props}
                                    handleClickLeft={props.handleClickLeft}
                                />
                                <ArrowRight
                                    {...props}
                                    handleClickRight={props.handleClickRight}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <ul className="enemyStats">
                            <li>Sheilds:{props.enemyShields}</li>
                            {/* <li>Attack:{props.enemyAttack}</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default BattleMenu;