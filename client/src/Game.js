import React, { Component } from "react";
import BeastHarkonnen from "./components/BeastHarkonnen";
import DuncanIdaho from "./components/DuncanIdaho";
import SardaukarElite from "./components/SardaukarElite";
import SardaukarGrunt from "./components/SardaukarGrunt";
import BattleMenu from "./components/BattleMenu";
import { Container, Row, Col } from "./components/Grid";

class Game extends Component {

  
//   function normalAttack() {
//     // e.preventDefault();
//     console.log("fight");
//     let playerDamageDealt = 100;
//     console.log(`this is the damage done by Duncan ${playerDamageDealt}`);
//     enemy.shields = enemy.shields - playerDamageDealt;
//     console.log(`Enemy shields = ${enemy.shields}`);
//     enemyAttack(duncanIdaho.shields);
//     deathCheckerPlayer(duncanIdaho.shields);
//     deathCheckerEnemy();
// };

// function pulseAttack() {
//     let roll = Math.floor(Math.random() * 6) + 1;;
//     console.log(`roll equals = ${roll}`);
//     duncanIdaho.shields = duncanIdaho.shields - duncanIdaho.shields/10;
//     console.log(` duncans new health ${duncanIdaho.shields}`);
//     if (roll === 1 || roll === 4) {
//         let playerDamageDealt = (80/100) * enemy.shields;
//         console.log("damage dealt "  + playerDamageDealt);
//         enemy.shields = enemy.shields - playerDamageDealt;
//         console.log("enemy sheilds " + enemy.shields);
//     }
//     else if (roll === 2 || roll === 5) {
//         let playerDamageDealt = (40/100) * enemy.shields;
//         console.log("damage dealt "+ playerDamageDealt);
//         enemy.shields = enemy.shields - playerDamageDealt;
//         console.log("enemy sheilds "+ enemy.shields);
//     }
//     else if (roll === 3 || roll === 6) {
//         let playerDamageDealt = 0;
//         console.log("Attack missed");
//         console.log("damage dealt "+ playerDamageDealt);
//         enemy.shields = enemy.shields - playerDamageDealt;
//         console.log("enemy sheilds "+ enemy.shields);

//     };
//     enemyAttack(duncanIdaho.shields);
//     deathCheckerPlayer();
//     deathCheckerEnemy();
// };

// function enemyAttack() {
//     let enemyDamageDealt = 50;
//     duncanIdaho.shields = duncanIdaho.shields - enemyDamageDealt;
//     console.log(`Enemy dealt ${enemyDamageDealt} damage`);
// };

// function deathCheckerPlayer () {
//     let health = duncanIdaho.shields;
//     console.log(`this is your health: ${health}`);
//     if(health === 0 || health < 0) {
//         console.log(`Duncan is dead`);
//     };
// };

// function deathCheckerEnemy () {
//     let vida = enemy.shields;
//     console.log(`this is the enemy's health ${vida}`);
//     if(vida === 0 || vida < 0) {
//         console.log(`Enemy is dead`);
//     };
// };

  state = {
    player: {
      shields: 600,
      attack: 100
    },
    enemy: {
      shields: 500,
      attack: 50
    }
  };

  normalAttack = () => {
    this.setState({enemy: {shields: this.state.enemy.shields}});
    console.log("fight");
    console.log(this.state.enemy.shields);
    let newEnemyShields = this.state.enemy.shields - 100;
    console.log(`enemy health ${newEnemyShields}`);
    this.setState({enemy: {shields: newEnemyShields}});
    this.enemyAttack();
  }
 
  enemyAttack = () => {
    this.setState({player: {shields: this.state.player.shields}});
    console.log(`The enemy attacks`);
    console.log(this.state.player.shields);
    let newPlayerShields = this.state.enemy.shields - 50;
    console.log(`player health ${newPlayerShields}`);
    this.setState({player: {shields: newPlayerShields}});
  };
  
  render() {
    // console.log(this.state.enemy.shields);
    return (
      <div>
       
        <Container>
          <Row>
              <Col size="md-3">
                <DuncanIdaho/>
              </Col>
              <Col size="md-6"></Col>
              <Col size="md-3">
                <SardaukarElite/>                
              </Col>
            </Row>
            
              <BattleMenu
                playerShields = {this.state.player.shields}
                playerAttack = {this.state.player.attack}
                normalAttack = {this.normalAttack}
                enemyShields = {this.state.enemy.shields}
                enemyAttack = {this.state.enemy.attack}
               
              />
            
        </Container>
      </div>
    );
  }
}

export default Game;
