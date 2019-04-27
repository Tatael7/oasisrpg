import React from "react";
import ArrowLeft from "../ArrowLeft";
import ArrowUp from "../ArrowUp";
import ArrowRight from "../ArrowRight";
import { Container } from "../Grid";

let duncanIdaho = {
    shields: 600
}

let enemy = {
    shields: 500
}

function BattleMenu () {
    
    function BattleSystem () {
        pulseAttack();
    }

    function normalAttack() {
        // e.preventDefault();
        console.log("fight");
        let playerDamageDealt = 100;
        console.log(playerDamageDealt);
        enemy.shields = enemy.shields - playerDamageDealt;
        console.log(`Enemy shields = ${enemy.shields}`);
        let enemyDamageDealt = 50;
        console.log(enemyDamageDealt);
        duncanIdaho.shields = duncanIdaho.shields - enemyDamageDealt;
        console.log(`Duncan idaho sheilds = ${duncanIdaho.shields}`);
    };

    function pulseAttack() {
        let roll = Math.floor(Math.random() * 7);
        console.log(`roll equals = ${roll}`);
        duncanIdaho.shields = duncanIdaho.shields - duncanIdaho.shields/10;
        console.log(` duncans new health ${duncanIdaho.shields}`);
        if (roll === 1 || 4 ) {
            let playerDamageDealt = Math.floor(enemy.shields/1);
            console.log("damage dealt "  + playerDamageDealt);
            enemy.shields = enemy.shields - playerDamageDealt;
            console.log("enemy sheilds " + enemy.shields);
        }
        else if (roll == 2 || 5) {
            let playerDamageDealt = Math.floor(enemy.shields/8);
            console.log("damage dealt "+ playerDamageDealt);
            enemy.shields = enemy.shields - playerDamageDealt;
            console.log("enemy sheilds "+ enemy.shields);
        }
        else if (roll === 3 || 6) {
            console.log("Attack missed");
        };
    }

    return (
        <div className="alert alert-primary">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button 
                            className="btn btn-warning"
                           onClick={BattleSystem}
                        >
                        Attack</button>
                        <button className="btn btn-danger">Pulse Attack </button>
                    </div>
                    <div className="col-sm-3">
                        <ul>
                            <li>Sheilds:{duncanIdaho.shields}</li>
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
                            <li>Sheilds:{enemy.shields}</li>
                            <li>Basic Attack:-10%</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default BattleMenu;