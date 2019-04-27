import React from "react";
import ArrowLeft from "../ArrowLeft";
import ArrowUp from "../ArrowUp";
import ArrowRight from "../ArrowRight";
import { Container } from "../Grid";

function BattleMenu () {
    return (
        <div className="alert alert-primary">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        {/* <div className="alert alert-danger" id="attack">
                            <p>Attack</p>
                        </div> */}
                        <button 
                            className="btn btn-warning"
                            // onClick={props.clickHandler}
                        >
                        Attack</button>
                        {/* <div className="alert alert-danger" id="pulseAttack">
                            <p>Pulse Attack</p>
                        </div> */}
                        <button className="btn btn-danger">Pulse Attack </button>
                    </div>
                    <div className="col-sm-3">
                        <ul>
                            <li>Sheilds:<p id="playerShields"></p></li>
                            <li>Basic Attack: -10%</li>
                            <li>Pulse Attack: 0%-80%</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <div className="container">
                            <div className="row">
                                <ArrowUp/>
                            </div>
                            <div className="row">
                                <ArrowLeft/>
                                <ArrowRight/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <ul>
                            <li>Sheilds:<p id="enemyShields"></p></li>
                            <li>Basic Attack:-10%</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BattleMenu;