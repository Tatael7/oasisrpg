import React from "react";
import LevelOne from "./components/LevelOne";
import Modal from "./components/Modal/Modal";

class LevelOneOne extends React.Component {

    constructor() {
        super();

        this.state = {
            isShowing : false,
            message: `You start your adventrure in the citadel, you come into a street, you can
                continue forward, go left or right.`,
            link: ""
        }
    }
    

    handleClickLeft = () => {
        console.log("you decided to go left");
        let newStoryLine = `You make a left at the fork and run into a Sardukar Grunt
        time to fight`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/game"});
        console.log(this.state.link);
    };

    handleClickRight = () => {
        let newStoryLine = `You turn right into an alley way and you see something shiny 
        in the corner, you walk over to it and you picjk up a battery pack
        for your shields system. Install it quickly.`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/leveloneone"});

    };
    
    handleClickUp = () =>  {
        console.log("this button is up");
        let newStoryLine = `You walk forward and you come to a fork in the road where you 
        can only go left or right.`;
        console.log(newStoryLine)
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/levelonetwo"});
    };

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

    render() {
        
        console.log(this.state);
        return (
            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    //link="/game"
                    link={this.state.link}
                    >
                        {this.state.message}                
                </Modal>
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