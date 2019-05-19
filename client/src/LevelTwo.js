import React from "react";
import LevelOne from "./components/LevelOne";
import Modal from "./components/Modal/Modal";
import "./test.css";
class LevelOneTwo extends React.Component {

    constructor() {
        super();

        this.state = {
            isShowing : false,
            story: `You are faced with a choice, go left, or go right.`,
            link: "",
            message: ""
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
        let newStoryLine = `You continue to the right alley, and walking towards you is a 
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
        
        return (
            <div className="B">
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    link={this.state.link}
                >
                    {this.state.message}                
                </Modal>

                <LevelOne
                    story={this.state.story}
                    handleClickLeft={this.handleClickLeft}
                    handleClickRight={this.handleClickRight}
                    handleClickUp={this.handleClickUp}
                />
            </div>
        )
    };
}

export default LevelOneTwo;