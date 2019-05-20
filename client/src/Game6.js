// import React, { Component } from "react";
// import BeastHarkonnen from "./components/BeastHarkonnen";
// import DuncanIdaho from "./components/DuncanIdaho";
// import SardaukarElite from "./components/SardaukarElite";
// import SardaukarGrunt from "./components/SardaukarGrunt";
// import BattleMenu from "./components/BattleMenu";
// import { Container, Row, Col } from "./components/Grid";
// import Modal from "./components/Modal/Modal";

// class Game6 extends Component {

//   constructor() {
//     super();
//     this.state = {
//       player: {
//         shields: 1100
        
//       },
//       enemy: {
//         shields: 3000
//       },
//       isAttacking: false,
//       isShowing: false,
//       message: "",
//       link: ""
//     }
//   };

//   normalAttack = () => {
//     this.setState({enemy: {shields: this.state.enemy.shields}});
//     console.log("normal attack");
//     console.log(this.state.enemy.shields);
//     let newEnemyShields = this.state.enemy.shields - 300;
//     console.log(`enemy health ${newEnemyShields}`);
//     this.setState({enemy: {shields: newEnemyShields}});
//     this.enemyAttack();
//     this.deathCheckEnemy();
//     this.deathCheckPlayer();
//   }
 
//   enemyAttack = () => {
//     this.setState({player: {shields: this.state.player.shields}});
//     // let newPlayerShields = this.state.player.shields - 50;
//     // console.log(`player health ${newPlayerShields}`);
//     // this.setState({player: {shields: newPlayerShields}});
//     let roll = Math.floor(Math.random() * 3) + 1;
//     console.log(`this is beast's roll ${roll}`);
//     if ( roll === 2 ) {
//       let newPlayerShields = this.state.player.shields - this.state.player.shields;
//       this.setState({player: {shields: newPlayerShields}});
//     }
//     else {
//       let newPlayerShields = this.state.player.shields - 200;
//       this.setState({player: {shields: newPlayerShields}});
//     }
//   };
  
//   pulseAttack = () => {
//     this.setState({enemy: {shields: this.state.enemy.shields}});
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`this is the roll ${roll}`);
//     if (roll === 1 || roll === 4) {
//       let damageDealt = (80/100) * this.state.enemy.shields;
//       console.log(`damage dealt ${damageDealt}`);
//       let newEnemyShields = this.state.enemy.shields - damageDealt;
//       console.log(`new enemy shields ${newEnemyShields}`);
//       this.setState({enemy: {shields: newEnemyShields}});
//     }
//     else if (roll === 2 || roll === 5) {
//       let damageDealt = (40/100) * this.state.enemy.shields;
//       console.log(`damage dealt ${damageDealt}`);
//       let newEnemyShields = this.state.enemy.shields - damageDealt;
//       console.log(`new enemy shields ${newEnemyShields}`);
//       this.setState({enemy: {shields: newEnemyShields}});
//     }
//     else if (roll === 3 || roll === 6) {
//       let damageDealt = 0;
//       console.log(`damage dealt ${damageDealt}`);
//       let newEnemyShields = this.state.enemy.shields - damageDealt;
//       console.log(`new enemy shields ${newEnemyShields}`);
//       this.setState({enemy: {shields: newEnemyShields}});
//     }
//     this.enemyPulseAttack();
//     this.deathCheckEnemy();
//     this.deathCheckPlayer();
    

//   }

//   enemyPulseAttack = () => {
//     this.setState({player: {shields: this.state.player.shields}});
//     let pulseAttackCost = this.state.player.shields/10;
//     let damageDealt = 50 + pulseAttackCost;
//     let newPlayerShields = this.state.player.shields - damageDealt;
//     this.setState({player: {shields: newPlayerShields}});
//   }

//   deathCheckPlayer = () => {
//     let vida = this.state.player.shields; 
//     if ( vida === 0 || vida < 0) {
//       console.log("duncan is dead");
//     }
//   };
//   deathCheckEnemy = () => {
//     if( this.state.enemy.shields === 0 || this.state.enemy.shields < 0) {
//       console.log(`enemy is dead`);
//       alert("Beast is dead");
//     }
//   };

//   render() {
//     return (
//       <div>
       
//         <Container>
//           <Row>
//               <Col size="md-3">
//                 <DuncanIdaho/>
//               </Col>
//               <Col size="md-9">
//                 <BeastHarkonnen/>
//               </Col>
//             </Row>
            
//               <BattleMenu
//                 playerShields = {this.state.player.shields}
//                 normalAttack = {this.normalAttack}
//                 pulseAttack = {this.pulseAttack}
//                 enemyShields = {this.state.enemy.shields}               
//               />
            
//         </Container>
        
//       </div>
//     );
//   }
// }

// export default Game6;


import React, { Component } from "react";
import BeastHarkonnen from "./components/BeastHarkonnen";
import DuncanIdaho from "./components/DuncanIdaho";
import BattleMenu from "./components/BattleMenu";
import { Container, Row, Col } from "./components/Grid";
import Modal from "./components/Modal/Modal";
import "./stylesGame.css";
import "./test.css";

class Game6 extends Component {

  constructor() {
    super();
    this.state = {
      player: {
        shields: 1500       
      },
      enemy: {
        shields: 3000
      },
      isAttacking: false,
      isShowing: false,
      message: "",
      link: "",
      fireExploding:false,
      poweredUp:false
    
      

    }
  };

  normalAttack = () => {
    this.setState({enemy: {shields: this.state.enemy.shields}});
    console.log("normal attack");
    console.log(this.state.enemy.shields);
    let newEnemyShields = this.state.enemy.shields - 300;
    console.log(`enemy health ${newEnemyShields}`);
    this.setState({enemy: {shields: newEnemyShields}});
    this.setState({isAttacking:true} ); 
    this.enemyAttack();
    this.deathCheckEnemy();
    this.deathCheckPlayer();
    setTimeout(() =>{this.setState({isAttacking:false})}, 550);
  }

  enemyAttack = () => {
    this.setState({player: {shields: this.state.player.shields}});
    let roll = Math.floor(Math.random() * 12) + 1;
    console.log(`this is beast's roll ${roll}`);
    if ( roll === 6) {
      let newPlayerShields = this.state.player.shields - this.state.player.shields;
      this.setState({player: {shields: newPlayerShields}});
    }
    else {
      let newPlayerShields = this.state.player.shields - 300;
      this.setState({player: {shields: newPlayerShields}});
    }
  };
  
  pulseAttack = () => {
    this.setState({enemy: {shields: this.state.enemy.shields}});
    console.log("pulse attack");
    console.log(this.state.enemy.shields);
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`this is the roll ${roll}`);
    if (roll === 1 || roll === 4) {
      let damageDealt = Math.floor((80/100) * this.state.enemy.shields);
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
    this.setState({player: {shields: this.state.player.shields}});
    let pulseAttackCost = Math.floor(this.state.player.shields/10);
    let damageDealt = pulseAttackCost + 300;
    this.setState({player: {shields: this.state.player.shields}});
    let roll = Math.floor(Math.random() * 12) + 1;
    console.log(`this is beast's roll ${roll}`);
    if ( roll === 6) {
      let newPlayerShields = this.state.player.shields - this.state.player.shields;
      this.setState({player: {shields: newPlayerShields}});
    }
    else {
      let newPlayerShields = this.state.player.shields - damageDealt;
      this.setState({player: {shields: newPlayerShields}});
    }
  }

  deathCheckPlayer = () => {
    let vida = this.state.player.shields; 
    if ( vida === 0 || vida < 0) {
      console.log("Duncan is dead");
      alert(`Duncan is dead, but in death he finds the power of coding magic.`);
      let newPlayerShields = 1000000000000000;
      this.setState({poweredUp:true});
      this.setState({player: {shields: newPlayerShields}});
      
    }
  };
  deathCheckEnemy = () => {
    if( this.state.enemy.shields === 0 || this.state.enemy.shields < 0) {
      console.log(`enemy is dead`);
      let newMessage = "Beast is dead";
      this.setState({fireExploding:true});
      this.setState({isShowing: true});
      this.setState({message: newMessage});
      this.setState({link: "/thankyou"});
    }
  };

  render() {
    return (
      <div>
        <Container>
          <div className="A">
          <Row>
              <Col size="md-3">
                <DuncanIdaho
                poweredUp={this.state.poweredUp}
                isAttacking={this.state.isAttacking}
                style={{
                  position:"relative", zIndex:-1
                  }}
                />
              </Col>
              <Col size="md-9">
                <BeastHarkonnen
                fireExploding={this.state.fireExploding}
                style={{position:"relative", zIndex:1,
                padding:0
                }} 
                />    
                <Modal
                  className="modal"
                  show={this.state.isShowing}
                  close={this.closeModalHandler}
                  link={this.state.link}
                >  
                  {this.state.message}             
                </Modal>
              </Col>
            </Row >
          </div>
            <BattleMenu className="BattleMenu"
              playerShields = {this.state.player.shields}
              normalAttack = {this.normalAttack}
              pulseAttack = {this.pulseAttack}
              enemyShields = {this.state.enemy.shields}           
            />      
        </Container>  
        
     
      </div>
    );
  }
}

export default Game6;
