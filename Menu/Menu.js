import React from "react";
import ReactDOM from "react-dom";
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import Game from "./Game";
import Store from "./Store";
import LevelTest from "./LevelOne"
//new modal reqs below
import {Picture} from "./logo.jpg";
ReactModal.setAppElement('#main');


class ExampleApp extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Menu</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={false}
        >
         <div>
            <img src={Picture} alt="logo" width="100%"/>
        </div>

        const routing = (
   <Router>
       <div>
           <ul>
               <li>
                   <Link to="/">Home</Link>
               </li>
               <li>
                   <Link to="/game">Game</Link>
               </li>
               <li>
                   <Link to="/store">Store</Link>
               </li>
               <li>
                   <Link to="/leveltest">Level</Link>
               </li>
           </ul>
           <Route exact path="/" component={App} />
           <Route exact path="/game" component={Game} />
           <Route exact path="/store" component={Store}/>
           <Route exact path="/leveltest" component={LevelTest}/>
       </div>
   </Router>
)
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close Menu</button>
      

          
        </ReactModal>
      </div>
    );
  }
}

const props = {};

ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))


ReactDOM.render(routing, document.getElementById("root"));