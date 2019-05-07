import React, { Component } from "react";
import BeastHarkonnen from "./components/BeastHarkonnen";
import DuncanIdaho from "./components/DuncanIdaho";
import SardaukarElite from "./components/SardaukarElite";
import SardaukarGrunt from "./components/SardaukarGrunt";
import BattleMenu from "./components/BattleMenu";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";

class Game extends Component {
 
  render() {
    
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
               
              />
            
        </Container>
      </div>
    );
  }
}

export default Game;
