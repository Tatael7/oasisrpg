import React from "react";
import LevelOne from "./components/LevelOne";

class LevelOneOne extends React.Component {
    
    state = {
        message: `You start your adventrure in the citadel, you come into a street, you can
        continue forward, go left or right.`,
        second: `You decide to turn left and you run into a Sardukar guard.`,
        third: `You diced to walk forward and come to a for in the road.`,
        forth: `You decide to turn to the right and end up walking into an alleyway, you 
        find an extra battery pack for your shields system but a you're installing it one Sadukar 
        Grunt and one Eleite corner you, it's time to fight`
    };

    handleClickLeft = () => {
        console.log("you decided to go left");
        let newStoryLine = this.state.second;
        this.setState({message: newStoryLine});
    };

    handleClickRight = () => {
        console.log("this button is right");
        let newStoryLine = this.state.forth;
        this.setState({message: newStoryLine});

    };
    
    handleClickUp = () =>  {
        console.log("this button is up");
        let newStoryLine = this.state.third;
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
            </div>
        )
    };
}

export default LevelOneOne;