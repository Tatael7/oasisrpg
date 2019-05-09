import React, { Component } from "react";
// import ArrowUp from "./components/ArrowUp"
// import ArrowLeft from "./components/ArrowLeft";
// import ArrowRight from "./components/ArrowRight";
// import BeastHarkonnen from "./components/BeastHarkonnen";
// import SardaukarElite from "./components/SardaukarElite";
import SardaukarGrunt from "./components/SardaukarGrunt";
import BattleMenu from "./components/BattleMenu";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";
import PlayerStats from "../src/components/PlayerStats";
import DuncanIdaho from "../src/components/DuncanIdaho";

// let duncanIdaho = {
//   shields: 600
// }

// let enemy = {
//   shields: 500
// }


class Game extends Component {
  state ={
    player:{shield:600,
      normalAttack:10,
      pulseAttack:20

    }
  }
  normalAttack() {

const newEnemyShield=this.state.enemy.shield -100;
this.setState({enemy: {shield: newEnemyShield}});

  }
  render(){
    return (
      <div>
        <Container>
         <BattleMenu attackHandler={this.normalAttack}
         attackHandler2={this.pulseAttack}
         shield={this.state.player.shield}
         newEnemyShield={this.state.enemy}
         ArrowUp={this.state.ArrowUp}
         ArrowLeft={this.state.ArrowLeft}
         ArrowRight={this.state.ArrowRight}
         />
            
        </Container>

      </div>
    );
  }
  
}
export default Game;


      // setAttacking("isAttacking");
      // // e.preventDefault();
      // console.log("fight");
      // let playerDamageDealt = 100;
      // console.log(`this is the damage done by Duncan ${playerDamageDealt}`);
      // enemy.shields = enemy.shields - playerDamageDealt;
      // console.log(`Enemy shields = ${enemy.shields}`);
      // // let enemyDamageDealt = 50;
      // // console.log(`this is the damage dealt to Duncan ${enemyDamageDealt}`);
      // // duncanIdaho.shields = duncanIdaho.shields - enemyDamageDealt;
      // // //console.log(`Duncan idaho sheilds = ${duncanIdaho.shields}`);
      // // setTimeout(function(){resetStance()});
      // resetStance();
  //     enemyAttack(duncanIdaho.shields);
  //     deathCheckerPlayer(duncanIdaho.shields);
  //     deathCheckerEnemy();
  // };

    // let [isAttacking, setAttacking] = useState('notAttacking');


  //   function resetStance(){
  //     setAttacking("notAttacking");
  // };
  
  // function pulseAttack() {
  //     let roll = Math.floor(Math.random() * 7);
  //     console.log(`roll equals = ${roll}`);
  //     duncanIdaho.shields = duncanIdaho.shields - duncanIdaho.shields/10;
  //     console.log(` duncans new health ${duncanIdaho.shields}`);
  //     if (roll === 1 || 4 ) {
  //         let playerDamageDealt = Math.floor(enemy.shields/1);
  //         console.log("damage dealt "  + playerDamageDealt);
  //         enemy.shields = enemy.shields - playerDamageDealt;
  //         console.log("enemy sheilds " + enemy.shields);
  //     }
  //     else if (roll === 2 || 5) {
  //         let playerDamageDealt = Math.floor(enemy.shields/8);
  //         console.log("damage dealt "+ playerDamageDealt);
  //         enemy.shields = enemy.shields - playerDamageDealt;
  //         console.log("enemy sheilds "+ enemy.shields);
  //     }
  //     else if (roll === 3 || 6) {
  //         console.log("Attack missed");
  //     };
  //     enemyAttack(duncanIdaho.shields);
  //     deathCheckerPlayer();
  //     deathCheckerEnemy();
  
  //     };
  
  //     function enemyAttack() {
  //         let enemyDamageDealt = 50;
  //         duncanIdaho.shields = duncanIdaho.shields - enemyDamageDealt;
  //         console.log(`Enemy dealt ${enemyDamageDealt} damage`);
  //     };
  
  //     function deathCheckerPlayer () {
  //         let health = duncanIdaho.shields;
  //         console.log(`this is your health: ${health}`);
  //         if(health === 0 || health < 0) {
  //             console.log(`Duncan is dead`);
  //         };
  //     };
  
  //     function deathCheckerEnemy () {
  //         let vida = enemy.shields;
  //         console.log(`this is the enemy's health ${vida}`);
  //         if(vida === 0 || vida < 0) {
  //             console.log(`Enemy is dead`);
  //         };
  //     };
  
  
  
//player1 property
//player2 property
//methods: attack player takes rgument, that state of play will be passed into 
//player compenent 
  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   API.getRecipes(this.state.recipeSearch)
  //     .then(res => this.setState({ recipes: res.data }))
  //     .catch(err => console.log(err));
  // };