import React, { Component } from 'react';
import Card from "./components/MenuSelections";
import Title from "./components/Title";

import Modal from './components/Modal/Modal';

class App extends Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

        // sessionStorage.clear();

        // sessionStorage.setItem("playerSheilds", 700);

        // console.log(sessionStorage.getItem("playershields"));

    

    

    render () {

        function initiateStats(){
            sessionStorage.clear();
            sessionStorage.setItem("playerShields", 700);
            sessionStorage.setItem("attack", `this is the attack ${100}`);
    
            console.log(sessionStorage.getItem("playerShields"));
            console.log(sessionStorage.getItem("attack"));
        };

        return (
            <div>
                <Title />
                <Card />
                {initiateStats()}
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                {/* <button className="open-modal-btn" onClick={this.openModalHandler}>New Game</button> */}

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    link={"/leveloneone"}
                    >
                        Let the adventure begin.                
                </Modal>
            </div>
        );
    }
}

export default App;