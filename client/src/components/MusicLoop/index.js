import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
// import MusicLoop from "./components/MusicLoop"
import Music from "./components/MusicLoop/IronMaiden-ToTameLand8-Bit.mp3"



function MusicLoop(props){

    playSong = (props) => {
        this.setState({
            isLoaded: true,
        });
    }

    render=(props)=>{
    const { song } = this.props;
    const { isLoaded } = this.state;
    
    return (
        <div>
            { isLoaded ? 'Playing' : 'Loading' }
            <audio
                preload="auto"
                src={require(`../MusicLoop/IronMaiden-ToTameLand8-Bit.mp3`)}
                loop="true"
                autoPlay={true}
                onLoadedData={() => this.playSong()}
            />
        </div>
        )
    }
}



export default MusicLoop;
