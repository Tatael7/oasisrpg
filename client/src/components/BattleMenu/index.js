import React from "react";
import ArrowLeft from "../ArrowLeft";
import ArrowUp from "../ArrowUp";
import ArrowRight from "../ArrowRight";
import PlayerStats from "../PlayerStats";
import { Container } from "../Grid";
import { ENOTEMPTY } from "constants";

let duncanIdaho = {
    shields: 600
}

let enemy = {
    shields: 500
}



function BattleMenu () {
   

    function normalAttack() {
        // e.preventDefault();
        console.log("fight");
        let playerDamageDealt = 100;
        console.log(`this is the damage done by Duncan ${playerDamageDealt}`);
        enemy.shields = enemy.shields - playerDamageDealt;
        console.log(`Enemy shields = ${enemy.shields}`);
        // let enemyDamageDealt = 50;
        // console.log(`this is the damage dealt to Duncan ${enemyDamageDealt}`);
        // duncanIdaho.shields = duncanIdaho.shields - enemyDamageDealt;
        // //console.log(`Duncan idaho sheilds = ${duncanIdaho.shields}`);
        enemyAttack(duncanIdaho.shields);
        deathCheckerPlayer(duncanIdaho.shields);
        deathCheckerEnemy();
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
        else if (roll === 2 || 5) {
            let playerDamageDealt = Math.floor(enemy.shields/8);
            console.log("damage dealt "+ playerDamageDealt);
            enemy.shields = enemy.shields - playerDamageDealt;
            console.log("enemy sheilds "+ enemy.shields);
        }
        else if (roll === 3 || 6) {
            console.log("Attack missed");
        };
        enemyAttack(duncanIdaho.shields);
        deathCheckerPlayer();
        deathCheckerEnemy();
    };

    function enemyAttack() {
        let enemyDamageDealt = 50;
        duncanIdaho.shields = duncanIdaho.shields - enemyDamageDealt;
        console.log(`Enemy dealt ${enemyDamageDealt} damage`);
    };

    function deathCheckerPlayer () {
        let health = duncanIdaho.shields;
        console.log(`this is your health: ${health}`);
        if(health === 0 || health < 0) {
            console.log(`Duncan is dead`);
        };
    };

    function deathCheckerEnemy () {
        let vida = enemy.shields;
        console.log(`this is the enemy's health ${vida}`);
        if(vida === 0 || vida < 0) {
            console.log(`Enemy is dead)`);
        };
    };

    return (
        <div className="alert alert-primary">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <button 
                            className="btn btn-warning"
                            onClick={normalAttack}
                        >
                        Attack
                        </button>
                        <button 
                            className="btn btn-danger"
                            onClick={pulseAttack}
                        >Pulse Attack </button>
                    </div>
                    <div className="col-sm-3">
                        <PlayerStats/>
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