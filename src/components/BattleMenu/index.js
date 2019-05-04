import React from "react";
import LevelStatsWrapper from "../../containers/LevelStatsWrapper";
import ArrowButtonWrapper from "../../containers/ArrowButtonWrapper";
import LevelUpWrapper from "../../containers/LevelUpWrapper";
import LevelStats from "../LevelStats/LevelStats";
import ArrowLeft from "../ArrowLeft";
import ArrowUp from "../ArrowUp";
import ArrowRight from "../ArrowRight";
import ArrowButtons from "../ArrowButtons";

import './BattleMenu.css'

function BattleMenu () {
    return(
        <div className="container">
    <div className="level-stats">
    <LevelStatsWrapper>
 <LevelStats /></LevelStatsWrapper>

 </div>
 <div className="arrow-buttons">
 <ArrowButtonWrapper><ArrowButtons /></ArrowButtonWrapper>
 </div>
 </div>
 )
  }



export default BattleMenu