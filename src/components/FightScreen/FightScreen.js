import React from 'react'
import './FightScreen.css'
import IntroScreenWrapper from '../../containers/IntroScreenWrapper'
import PlayerWrapper from '../../containers/PlayerWrapper'
import EnemyWrapper from '../../containers/EnemyWrapper'
import BattleMenuWrapper from '../../containers/BattleMenuWrapper'
import ReactAudioPlayer from 'react-audio-player';
import Music from "../MusicLoop/IronMaiden-ToTameLand8-Bit.mp3"

const FightScreen = ({isPlaying}) => {
  return (
 
    <div className="fight-screen">
     
      {!isPlaying ?
        <IntroScreenWrapper /> :
        <div className="combat">
          <div className="character">
            <PlayerWrapper />
          </div>
          <div className="combat-buttons">
            <BattleMenuWrapper />
          </div>
          <div className="character">
            <EnemyWrapper />
          </div>
          <ReactAudioPlayer
  src={Music}
  autoPlay
  controls
/>
        </div>
      }
    </div>
  )
}

export default FightScreen
