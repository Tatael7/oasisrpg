import React from "react";
import LevelOne from "./components/LevelOne";
import Modal from "./components/Modal/Modal";
import introMovie from "../src/img/introMovie.gif"
import "./stylesGame.css"
import { relative } from "path";

class LevelOneOne extends React.Component {

    constructor() {
        super();

        this.state = {
            isShowing : false,
            message: `You start your adventure in the citadel, you come into a street, you can
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
      
        let newStoryLine = 
        `You turn right into an alley way and you see something shiny 
        in the corner, you walk over to it and you pick up a battery pack
        for your shields system. Install it quickly.`;
        this.setState({isShowing: true});
        this.setState({message: newStoryLine});
        this.setState({link: "/levelonetwo"});
        this.setState({Battery01: false})

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
            <div style={{
                borderWidth:100,
                borderColor:"black"
            }}><div>
                <img src={require("../src/img/Spinning-orb-new-GIF-2.gif")}   alt="Battery01" width="100%"
                // className={props.Battery01 ? "Battery01 removed": "Battery01"}
         
            style={{
                marginLeft:"83%",
                width:"10%",
            marginTop:"-40%",
            position:"fixed",
            zIndex:-1,
            }}
            />      
                <img src={introMovie} alt="introMovie" width="90%"
            className="introMovie"
            style={{
            positon:"fixed",
            zIndex:5
            }}
            />
    <img src={require("../src/img/Story02.Map01.jpg")} alt="Story02Map01" width="100%"
            style={{
                width:"100%",
            // marginTop:"-80%",
            position:"fixed",
            zIndex:-5,
            }}
            />  

</div>
            <div style={{ 
                        borderWidth:"100",
                        borderColor:"black",
                        //  marginTop:"-100"
                        zIndex:1,
                        position:relative
                    }}
             >
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <Modal
                    className="modal"
                    style={{   
                        zIndex:3,
                        position:relative,
                        marginTop:0
                     }}
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    //link="/game"
                    link={this.state.link}
                    >
                        {this.state.message}             
                </Modal>
                <LevelOne
                style={{ 
                        borderWidth:"100",
                        borderColor:"black",
                        backgroundColor: 'red',flex:1,
                    // marginTop:"-100",
                    position:"fixed",
                     zIndex:1,
            }}
                    story={this.state.message}
                    handleClickLeft={this.handleClickLeft}
                    handleClickRight={this.handleClickRight}
                    handleClickUp={this.handleClickUp}
                    
                />
                
            </div>
        
                 </div>
                 
        )
    };
}

export default LevelOneOne;