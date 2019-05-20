import React from "react";
import Modal from "./components/Modal/Modal";
import introMovie from "../src/img/Ginaz_level2_cutSc1.gif";


class Intro extends React.Component {

    constructor() {
        super();

        this.state = {
            isShowing : false,
            message: `Continue forth towards your destiny.`,
            link: "leveloneone"
        }

    
    }

    // setTimeout = () => {
    //     this.setState({ isShowing: true })
    //   }, 3000;

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
        return(
            <div>
                <img src={introMovie} alt="introMovie" width="90%"
                    className="introMovie"
                    style={{
                    positon:"fixed",
                    zIndex:5
                    }}
                />
                <button
                    onClick={this.openModalHandler}
                >Continue</button>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <Modal
                    
                    className="modal"
                    style={{   
                        zIndex:3,
                        position:"relative",
                        marginTop:0
                     }}
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    //link="/game"
                    link={this.state.link}
                    >
                        {this.state.message}             
                </Modal>
        
            </div>
        )
    }
}

export default Intro;
