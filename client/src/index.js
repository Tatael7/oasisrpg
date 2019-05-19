import React from "react";
import ReactDOM from "react-dom";
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import Store from "./Store";
import LevelOneOne from "./LevelOne";
import Game from "./Game";
import LevelOneTwo from "./LevelTwo";
import Game2 from "./Game2";
import LevelOneThree from "./LevelThree";
import Game3 from "./Game3";
import Game4 from "./Game4";
import Game5 from "./Game5";
import LevelFour from "./LevelFour";
import Game6 from "./Game6";
import MenuCurtain from "./components/MenuCurtain";
import {Picture} from "./img/background_battleScreen.jpg"
import ThankYou from "./ThankYou";

// import "./stylesGame.css"

// import ReactAudioPlayer from 'react-audio-player';
// // import MusicLoop from "./components/MusicLoop";
// import Music from "./components/MusicLoop/IronMaiden-ToTameLand8-Bit.mp3"



const routing = (


    <Router
    style={{
        position:"absolute",
        zIndex:-1,
        // maxHeight:"50%"

        }}
    >
        <div 
        style={{maxHeight:"900px",
        zIndex:1,
    
    
            }}
        >
        <MenuCurtain
        style={{
        position:"relative",
        zIndex:20
        }}
        />
        
        {/* <ul>
                 <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/game">Game</Link>
                </li> 
                 <li>
                    <Link to="/store">Store</Link>
                </li>
                <li>
                    <Link to="/leveloneone">Level</Link>
                </li>
                <li>
                    <Link to="/game2">Game2</Link>
                </li> 
                 <li>
                    <Link to="/levelonetwo">Level2</Link>
                </li>
                <li>
                    <Link to="/levelonethree">Level3</Link>
                </li>
                <li>
                    <Link to="/game3">Game3</Link>
                </li>
                <li>
                    <Link to="/game4">Game4</Link>
                </li>
                <li>
                    <Link to="/game5">Game5</Link>
                </li>
                <li>
                    <Link to="/levelonefour">Level4</Link>
                </li> 
                 <li>
                    <Link to="/game6">Game6</Link>
                </li> 
                <li>
                    <Link to="/thankyou">Thank You</Link>
                </li>
            </ul> */}
            <Route exact path="/" component={App} />
            <Route exact path="/store" component={Store}/>
            <Route exact path="/leveloneone" component={LevelOneOne}/>
            <Route exact path="/game" component={Game} />
            <Route exact path="/levelonetwo" component={LevelOneTwo}/>
            <Route exact path="/game2" component={Game2}/>
            <Route exact path="/levelonethree" component={LevelOneThree}/>
            <Route exact path="/game3" component={Game3}/>
            <Route exact path="/game4" component={Game4}/>
            <Route exact path="/game5" component={Game5}/>
            <Route exact path="/levelonefour" component={LevelFour}/>
            <Route exact path="/game6" component={Game6}/>
            <Route exact path="/thankyou" component={ThankYou}/>
            {/* <MusicLoop
            isPlaying={this.props.isPlaying}
            /> */}
            {/* <ReactAudioPlayer
                src="./components/MusicLoop/IronMaiden-ToTameLand8-Bit.mp3"
                autoPlay={"true"}
             */}
                />      
                 {/* { isLoaded ? 'Playing' : 'Loading' } */}
                {/* <audio
                    preload="auto"
                    src={require(`./IronMaiden-ToTameLand-8bit.mp3`)}
                    loop="true"
                    autoPlay={true}
                    onLoadedData={() => this.playSong()}
                /> */}
        </div>
        
    </Router >
    //   {/* <img src={Picture} width="100%"/> */}
)

ReactDOM.render(routing, document.getElementById("root"));

