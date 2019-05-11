import React from "react";
import LevelOne from "./components/LevelOne";

class Level extends React.Component {
    
    state = {
        message: [
            "zero",
            "first",
            "second",
            "third",
            "forth",
            "fifth"
        ]
    };

    handleClickLeft = () => {
        console.log("you decided to go left");
        console.log(this.state);
        console.log(this.state.message);
        console.log(this.state.message[1]);
        let newStoryLine = this.state.message[1];
        console.log(newStoryLine)
        this.setState({message: newStoryLine});
    };

    handleClickRight = () => {
        console.log("this button is right");
        console.log(this.state.message[2]);
        let newStoryLine = this.state.message[2];
        console.log(newStoryLine)
        this.setState({message: newStoryLine});

    };
    
    handleClickUp = () =>  {
        console.log("this button is up");
        let newStoryLine = this.state.message[3];
        console.log(newStoryLine)
        this.setState({message: newStoryLine});
    };


    render() {
        
        
        return (
            <div>
                <LevelOne
                    story={this.state.message}
                    handleClickLeft={this.handleClickLeft}
                    handleClickRight={this.handleClickRight}
                    handleClickUp={this.handleClickUp}
                />
                <p>{this.state.message}</p>
            </div>
        )
    };
}

export default Level;