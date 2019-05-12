import React, { Component } from "react";
import BeastHarkonnen from "./components/BeastHarkonnen";
import DuncanIdaho from "./components/DuncanIdaho";
import SardaukarElite from "./components/SardaukarElite";
import SardaukarGrunt from "./components/SardaukarGrunt";
import BattleMenu from "./components/BattleMenu";
import { Container, Row, Col } from "./components/Grid";
// import Player from "../src/components/Player";
import "./stylesGame.css"

class Game extends Component {
//   let a = document.getElementById("inp");
//   let b;
//   function dis(){
//     a.style.display = "none";  
//   }
//   Start = function Start() {
//     var reply = confirm("Our Guild has taken a commission.");
//     confirm("The Geidi Principals seek our help in containing a galactic threat.");
//    if (reply === false) {
//      alert("Quit Game?");
//      document.getElementById("text").innerHTML = "Thanks for playing!";
//      }
//     else {
//       Game();
//       console.log("starting");
//     }
//    }; 
  
// Game()={
//     document.getElementById("text").innerHTML = "Harkonnen operatives initiated their Sardaukar program, using prisoners from Selusa Secundus.<button> You are to deplot to Geidi Prime immediately<button>";
//   var local = prompt("Where do you want to go?\nStartLeft, StartUp, or StartRight");
//   if (local === "StartLeft"){
//     document.getElementById("text").innerHTML = "You see a Sarkdaukar Soldier (StartLeft)(functionLevelOneSingleSardaukar/Sardaukar)",
//     LevelOneSingleSardaukar();
//   }
//     else if (local === "StartUp"){
//       document.getElementById("text").innerHTML = "The Port(StartUp) is open YOU COULD GO LEFT(NULL- Call it (StartUpThenLeft)) GO UP(DeadEndStartUp()- Call it StartUpThenUp) RIGHT(pickup- Call it StartUpThenRight) ";
//     }
//     else{
//       document.getElementById("text").innerHTML = "T(StartRight 'Its a dead end, you must tunr back.) (DeadEndStartRight"; 
//       var local = prompt("Where do you want to go?\nStartLeft, (StartUp)");
//     }
//     alert("Press enter to continue.");
//     console.log("game");
//     // LevelOneSingleSardaukar();
//   } 
  
//   //get Shield Increase
//   function StartUpThenRight(){
//     alert("You found a modular battery, Your shield defense has increased.");
//     //Add modular tech-  Increase sheild, 
//     //then function FoundTech resets you to look away, and removes
//     //
//   }
  
//   function FoundTech(){
//   //FoundTechLeft="That is the way you entered",
//   //FoundTechUp=FoundTechUpThen
//   //FoundTechRight-"This is a Dead End"
//   }
  
//   function FoundTechUpThen(){
//     //FoundTechUpThenLeft(LevelOneSingleSardaukar)
//     //FoundTechUpThenUp
//     //FoundTechUpThenRight(LevelOneDoubleEnemy)
//   }
  
//   //LevelOneSingleSardaukar will be first solo Sardaukar Fight
//   function LevelOneSingleSardaukar() {
//     document.getElementById("text").innerHTML = "Hey, you're that Swordmaster! It's time to meet your maker!";
//     var adventurer=confirm("Sardaukar Soldier: Hey, you're that Swordmaster! It's time to meet your maker!", "I must stand and fight(make cancel other button");
//     if (adventurer===true){
//       treasureQuest();
//       // document.getElementById("text").innerHTML = "Well then, " + name + ". Could you do me a favour?";
//       // var choice = confirm("Do the man a favour?(FIGHT SARDAUKAR???-If True go to TREASURE QUEST->, if FALSE GO TO ROBBER FIGHT)");
//     }
//     else {
//       alert("I don’t want to get into a fight just yet.");
//         //LevelOneDoubleEnemy is 2 
//         LevelOneDoubleEnemy();
//       }
    
//     }
  
  
//   //This will be Fight 2 Sardaukar
//   function LevelOneDoubleEnemy(){
//     alert("Prepare to Fight Sardaukar & Aramsham)!");
//     document.getElementById("text").innerHTML = "Wed finally found you!";
//       alert("The Sardaukar throws the knife!");
//       document.getElementById("text").innerHTML = "Kill the Ginazian!.";
//      confirm("Do you attack?");
//         document.getElementById("text").innerHTML = "You attack!";
//         alert("You hit the robber!");
//     document.getElementById("text").innerHTML = "You have killed the Sarduakar!";
//     console.log("Aramsham");
//   } 
  
  //functions
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
      attack: 100,
      // attacking: notAttacking
    },
    DuncanDiv: "default",
    // this.default,

    enemy: {
      shields: 500,
      attack: 50
    },
    grunt: {
      shields: 500,
      attack: 50
    },
    elite:{
      shields: 500,
      attack: 50
    },
    beast: {
      shields: 500,
      attack: 50
    }
  };

  normalAttack = () => {  
    this.setState({DuncanDiv: "attack"})
  //   this.setState({enemy: {shields: this.state.enemy.shields}});
  //   console.log("fight");
  //       console.log(this.state.enemy.shields);
  //   let newEnemyShields = this.state.enemy.shields - 100;
  //   console.log(`enemy health ${newEnemyShields}`);
  //   this.setState({enemy: {shields: newEnemyShields}});
  //   this.enemyAttack();
  // }
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
   //make sure duncandiv is set to Default
        <Container>
          <Row className="BattleDiv">
              <Col size="md-3">
             <div className="DuncanDiv .attack">  
             {/* {this.state.DuncanDiv} */}
              <DuncanIdaho
              // attackStatus
                />
                </div>
              </Col>
              <Col size="md-6"></Col>
              <Col size="md-3" className="enemyDiv">

              <div className="eliteDiv"><SardaukarElite/></div>
               <div className="gruntDiv"><SardaukarGrunt/></div>
               <div className="bossDiv"><BeastHarkonnen/></div>       
              </Col>
            </Row>
            
              <BattleMenu
                attackHandler={this.normalAttack}
              attackHandler2={this.pulseAttack}
                playerShields = {this.state.player.shields}
                playerAttack = {this.state.player.attack}
                normalAttack = {this.normalAttack}
                enemyShields = {this.state.enemy.shields}
                enemyAttack = {this.state.enemy.attack}
               
              />
            
        </Container>
      
    );
  }
}

export default Game;

//Notes
//Tried adding CSS directly to component:
// className="Boss" style={{visibility: this.state.showButton ? 'visible' : 'hidden' }} 