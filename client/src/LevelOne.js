import React from "react";
import LevelOne from "./components/LevelOne";

class LevelTest extends React.Component {
    
    state = {
        message: "hello world"
    };

    handleClickLeft() {
        console.log("you decided to go left");
        this.setState({message : "You turned left!"});
        
    };

    handleClickRight() {
        console.log("this button is right");
    };
    
    handleClickUp() {
        console.log("this button is up");
    };


    render() {
        
        
        return (
            <div>
                <LevelOne
                    // handleClickLeft = {this.handleClickLeft}
                />
                <button 
                    onChange={this.handleClickLeft}
                >Test</button>
                <p>{this.state.message}</p>
            </div>
        )
    };
}

export default LevelTest;