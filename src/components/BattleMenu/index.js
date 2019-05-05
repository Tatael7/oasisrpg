import React from "react";
import LevelStatsWrapper from "../../containers/LevelStatsWrapper";
import ArrowButtonWrapper from "../../containers/ArrowButtonWrapper";
import LevelUpWrapper from "../../containers/LevelUpWrapper";
import LevelStats from "../LevelStats/LevelStats";
import ArrowLeft from "../ArrowLeft";
import ArrowUp from "../ArrowUp";
import ArrowRight from "../ArrowRight";
import ArrowButtons from "../ArrowButtons";

import './style.css'

function BattleMenu () {
    return(
        <div className="container">
    <div className="level-stats">
    <LevelStatsWrapper>
 <LevelStats /></LevelStatsWrapper>

 </div>
 {/* <Player>
 <h3>{name}</h3>
      <div className='status-bar' style={{width: maxHealth + 'px'}}>
        <div className='player-health' style={{width: health + 'px'}}></div>
      </div>
      <div className='status-bar' style={{width: maxMana * 20 + 'px'}}>
        <div className='player-mana' style={{width: mana * 20 + 'px'}}></div>
      </div>
      <div className='stats'>
      <p className='stat'>Level: {level}</p>
        <p className='stat'>Strength: {strength}</p>
        <p className='stat'>Sheilds: {defense}</p>
        <p className='stat'>Pulse Energy: {magic}</p>
        <p className='stat'>Max Health: {maxHealth}</p>
        <p className='stat'>Max Mana: {maxMana}</p>
      </div>
      </Player> */}
 <div className="arrow-buttons">
 <ArrowButtonWrapper><ArrowButtons /></ArrowButtonWrapper>
 </div>
 </div>
 )
  }



export default BattleMenu