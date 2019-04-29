import React, { Component } from "react";
import ArrowUp from "./components/ArrowUp"
import ArrowLeft from "./components/ArrowLeft";
import ArrowRight from "./components/ArrowRight";
import BeastHarkonnen from "./components/BeastHarkonnen";
import DuncanIdaho from "./components/DuncanIdaho";
import SardaukarElite from "./components/SardaukarElite";
import SardaukarGrunt from "./components/SardaukarGrunt";
import BattleMenu from "./components/BattleMenu";
import API from "./utils/API";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  // state = {
  //   recipes: [],
  //   recipeSearch: ""
  // };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };

  

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
                {/* <BeastHarkonnen/> */}
                <SardaukarGrunt/>
              </Col>
            </Row>
            <Row>
              <BattleMenu
               
              />
            </Row>
        </Container>
      </div>
    );
  }
}

export default App;
