import React, { Component } from "react";
import Header from "./components/Header";
import ArrowUp from "./components/ArrowUp"
import ArrowLeft from "./components/ArrowLeft";
import ArrowRight from "./components/ArrowRight";
import BeastHarkonnen from "./components/BeastHarkonnen";
import DuncanIdaho from "./components/DuncanIdaho";
import SardaukarElite from "./components/SardaukarElite";
import SardaukarGrunt from "./components/SardaukarGrunt";
import BattleMenu from "./components/BattleMenu";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };

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

  // clickHandler = () => {
  //   //code here
  // }

  render() {
    return (
      <div>
        <Header/>
        <Container>
          {/* <Row>
            <Col size="xs-9 sm-10">
            
              <ArrowUp/>
              <ArrowLeft/>
              <ArrowRight/>
                   
            </Col>

            <Col size="lg-12">
              
                <DuncanIdaho/>
                <BeastHarkonnen/>
              
              <div>
                <SardaukarElite/>
                <SardaukarGrunt/>
              </div>
            </Col>
          </Row> */}
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
                // clickHandler={this.clickHandler}
                // test='TEST'
              />
            </Row>
        </Container>
        {/* </Jumbotron> */}
      </div>
   
    //   <div>
    //     <Nav />
    //     <Jumbotron />
    //     <Container>
    //       <Row>
    //         <Col size="md-12">
    //           <form>
    //             <Container>
    //               <Row>
    //                 <Col size="xs-9 sm-10">
    //                   <Input
    //                     name="recipeSearch"
    //                     value={this.state.recipeSearch}
    //                     onChange={this.handleInputChange}
    //                     placeholder="Search For a Recipe"
    //                   />
    //                 </Col>
    //                 <Col size="xs-3 sm-2">
    //                   <Header></Header>
    //                   <Button
    //                     onClick={this.handleFormSubmit}
    //                     type="success"
    //                     className="input-lg"
    //                   >
    //                     Search
    //                   </Button>
    //                 </Col>
    //               </Row>
    //             </Container>
    //           </form>
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col size="xs-12">
    //           {!this.state.recipes.length ? (
    //             <h1 className="text-center">No Recipes to Display</h1>
    //           ) : (
    //             <RecipeList>
    //               {this.state.recipes.map(recipe => {
    //                 return (
    //                   <RecipeListItem
    //                     key={recipe.title}
    //                     title={recipe.title}
    //                     href={recipe.href}
    //                     ingredients={recipe.ingredients}
    //                     thumbnail={recipe.thumbnail}
    //                   />
    //                 );
    //               })}
    //             </RecipeList>
    //           )}
    //         </Col>
    //       </Row>
    //     </Container>
    //   </div>
    // );
    );
  }
}

export default App;
