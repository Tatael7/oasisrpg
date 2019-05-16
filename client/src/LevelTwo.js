import React from "react";
import LevelOne from "./components/LevelOne";
import Modal from "./components/Modal/Modal";

class LevelOneOne extends React.Component {

    constructor() {
        super();

        this.state = {
            isShowing : false,
            message: `You are faced with a choice, go left, or go right.`,
            link: ""
        }
    }
    

    handleClickLeft = () => {
        console.log("you decided to go left");
        let newStoryLine = `You take your chances with the left road and you see a Sardukar
        Elite walking your way but he hasn't noticed you, you turn around to avoid conflict quickly.`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/levelonetwo"});
        console.log(this.state.link);
    };

    handleClickRight = () => {
        let newStoryLine = `You continue to the right alley, and wlaking towards you is a 
        Grunt, you try to run but a Sardukar Elite comes up behind you, you are now
        forced to fight two opponents for your cowardice.`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/game2"});

    };
    
    handleClickUp = () =>  {
        console.log("this button is up");
        let newStoryLine = `You walk into the wall like a moron.`;
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

                <LevelOne
                    story={this.state.message}
                    handleClickLeft={this.handleClickLeft}
                    handleClickRight={this.handleClickRight}
                    handleClickUp={this.handleClickUp}
                />
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    //link="/game"
                    link={this.state.link}
                    >
                        {this.state.message}                
                </Modal>
            </div>
        )
    };
}

export default LevelOneOne;