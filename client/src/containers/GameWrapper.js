import {connect} from 'react-redux'
import Enemy from '../components/Enemy/Enemy'
import {nextEnemy} from '../actions'

const mapStateToProps = (state) => ({
  name: state.enemy.name,
  img: state.enemy.img,
  health: state.enemy.health,
  attack: state.enemy.moves.attack,
  maxHealth: state.enemy.stats.maxHealth,
  isAttacking: state.enemy.isAttacking,
  isSpecialing: state.enemy.isSpecialing
})

const mapDispatchToProps = {
  nextEnemy
}

const EnemyWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Enemy)

export default EnemyWrapper

import {connect} from 'react-redux'
import Player from '../components/Player/Player'
import {playerAttacks} from '../actions'

const mapStateToProps = state => ({
  name: state.player.name,
  img: state.player.img,
  imgName: state.player.imgName,
  level: state.player.stats.level,
  health: state.player.stats.health,
  mana: state.player.stats.mana,
  strength: state.player.stats.strength,
  defense: state.player.stats.defense,
  maxHealth: state.player.stats.maxHealth,
  magic: state.player.stats.magic,
  maxMana: state.player.stats.maxMana,
  isAttacking: state.player.isAttacking,
  isSpecialing: state.player.isSpecialing,
  isHealing: state.player.isHealing
})

const mapDispatchToProps = {
  playerAttacks
}

const PlayerWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default PlayerWrapper





import {connect} from 'react-redux'
import FightScreen from '../components/FightScreen/FightScreen'

const mapStateToProps = (state) => ({
  isPlaying: state.levelStats.isPlaying
})

const mapDispatchToProps = {
}

const FightScreenWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(FightScreen)

export default FightScreenWrapper

import {connect} from 'react-redux'
import IntroScreen from '../components/IntroScreen/IntroScreen'
import {
  introChooseName, 
  introChooseCharacter, 
  introSubmit, 
  checkMovePreReqs
} from '../actions'

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
  introChooseName,
  introChooseCharacter,
  introSubmit,
  checkMovePreReqs
}

const IntroScreenWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroScreen)

export default IntroScreenWrapper

import {connect} from 'react-redux'
import LevelUp from '../components/LevelUp/LevelUp'
import {
  levelUpStatChoose, 
  levelUp, 
  nextEnemy, 
  increaseEnemyCounter, 
  checkMovePreReqs
} from '../actions'

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
  levelUpStatChoose,
  levelUp,
  nextEnemy,
  increaseEnemyCounter,
  checkMovePreReqs
}

const LevelUpWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelUp)

export default LevelUpWrapper
