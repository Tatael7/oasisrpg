import React from "react";
import LevelOne from "./components/LevelOne";
import Modal from "./components/Modal/Modal";

class LevelOneThree extends React.Component {

    constructor() {
        super();

        this.state = {
            isShowing : false,
            message: `You've defeated the Elite and Grunt team and you take 
            the Elite's key card and to enter the hidden passageway in the end of the alley.
            Suddenly you are surrounded by enemies, you must choose how to proceed with battle.`,
            link: ""
        }
    }
    

    handleClickLeft = () => {
        console.log("you decided to go left");
        let newStoryLine = `You turn to the Elite to your left and engage.`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/game3"});
        console.log(this.state.link);
    };

    handleClickRight = () => {
        let newStoryLine = `You turn to the right to take on a pair of Elites`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/game5"});

    };
    
    handleClickUp = () =>  {
        console.log("this button is up");
        let newStoryLine = `You take on a group of Sardukar Grunts;`;
        console.log(newStoryLine)
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/game4"});
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
            // style={{position:"fixed", zIndex:1, marginTop:"-10%"}}
            <div >
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
                    {this.state.message}
                <LevelOne
                    story={this.state.message}
                    handleClickLeft={this.handleClickLeft}
                    handleClickRight={this.handleClickRight}
                    handleClickUp={this.handleClickUp}
                    // style={{position: "fixed", zIndex:1,
                    // marginTop:"-100%"
                    // }}
                />
                
            </div>
        )
    };
}

export default LevelOneThree