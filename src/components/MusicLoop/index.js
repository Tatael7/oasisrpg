import React from 'react'

function MusicLoop(){


    playSong = () => {
        this.setState({
            isLoaded: true,
        });
    }

    render(){
    const { song } = this.props;
    const { isLoaded } = this.state;

    return (
        <div>
            { isLoaded ? 'Playing' : 'Loading' }
            <audio
                preload="auto"
                src={require(`../MusicLoop/Ir.onMaiden-ToTameLand8-Bit.mp3`)}
                loop="true"
                autoPlay={true}
                onLoadedData={() => this.playSong()}
            />
        </div>
        )
    }
}


export default MusicLoop;
