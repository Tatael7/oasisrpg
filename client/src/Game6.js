import React, { Component } from "react";
import BeastHarkonnen from "./components/BeastHarkonnen";
import DuncanIdaho from "./components/DuncanIdaho";
import SardaukarElite from "./components/SardaukarElite";
import SardaukarGrunt from "./components/SardaukarGrunt";
import BattleMenu from "./components/BattleMenu";
import { Container, Row, Col } from "./components/Grid";
import BattleBackground from "../src/components/Story/background_battleScreen.jpg";
class Game6 extends Component {

  state = {
    player: {
      shields: 600
      
    },
    enemy: {
      shields: 500
    },
    isAttacking: false,
    isPulsing: false,

    DuncanIsAttacking:false,

    EnemyIsAttacking: false,

    EnemyIsPulsing: false,
       
    storyHidden: false,

    beastIsPulsing: true,

    beastRotating: true

  };
  normalAttack = () => {

    console.log("normal attack");
    console.log(this.state.enemy.shields);
    let newEnemyShields = this.state.enemy.shields - 100;
    console.log(`enemy health ${newEnemyShields}`);
    this.setState({
      enemy: {shields: newEnemyShields},
      isAttacking:true,
    }
    );
 
    setTimeout(() =>{this.setState({isAttacking:false})}, 550);
    this.enemyAttack();
    this.deathCheckEnemy();
    this.deathCheckPlayer();
  }
 
  enemyAttack = () => {
    this.setState({enemy: {shields: this.state.enemy.shields},
      isAttacking:true,
      isPulsing:true,
    });
    setTimeout(() =>{this.setState({isAttacking:false,
    isPulsing:false
    })}, 900);
    console.log("pulse attack");
    console.log(this.state.enemy.shields);
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`this is the roll ${roll}`);
    if (roll === 1 || roll === 4) {
      let damageDealt = (80/100) * this.state.enemy.shields;
      console.log(`damage dealt ${damageDealt}`);
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      console.log(`new enemy shields ${newEnemyShields}`);
      this.setState({enemy: {shields: newEnemyShields}});
    }
    else if (roll === 2 || roll === 5) {
      let damageDealt = (40/100) * this.state.enemy.shields;
      console.log(`damage dealt ${damageDealt}`);
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      console.log(`new enemy shields ${newEnemyShields}`);
      this.setState({enemy: {shields: newEnemyShields}});
    }
    else if (roll === 3 || roll === 6) {
      let damageDealt = 0;
      console.log(`damage dealt ${damageDealt}`);
      let newEnemyShields = this.state.enemy.shields - damageDealt;
      console.log(`new enemy shields ${newEnemyShields}`);
      this.setState({enemy: {shields: newEnemyShields}});
    }
    this.enemyPulseAttack();
    this.deathCheckEnemy();
    this.deathCheckPlayer();
  }

  enemyPulseAttack = () => {
    setTimeout(()=>{this.setState({player: {shields: this.state.player.shields}});
    let pulseAttackCost = this.state.player.shields/10;
    let damageDealt = 50 + pulseAttackCost;
    let newPlayerShields = this.state.player.shields - damageDealt;
    this.setState({player: {shields: newPlayerShields}})}, 1000);
  }

  deathCheckPlayer = () => {
    let vida = this.state.player.shields; 
    if ( vida === 0 || vida < 0) {
      console.log("duncan is dead");
    }
  };
  deathCheckEnemy = () => {
    let vida = this.state.enemy.shields;
    if(vida === 0 || vida < 0) {
      console.log("enemy is dead");
      alert("Enemy is Dead");
    }
  
  }

  render() {
    return (
      <div>
       
        <Container
        style={{zIndex:-1,
        // marginTop:-2000
        }}
        >
          <Row>
              <Col size="md-3">
                <DuncanIdaho/>
              </Col>
              <Col size="md-9">
                <BeastHarkonnen
                beastRotating={this.state.beastRotating}
                />
              </Col>
            </Row>
            
              <BattleMenu
                playerShields = {this.state.player.shields}
                // playerAttack = {this.state.player.attack}
                normalAttack = {this.normalAttack}
                pulseAttack = {this.pulseAttack}
                enemyShields = {this.state.enemy.shields}
                // enemyAttack = {this.state.enemy.attack}
               
              />
            
        </Container>
       <img src= {BattleBackground}/>
      </div>
    );
  }
}

export default Game6;
