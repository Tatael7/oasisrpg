import {connect} from 'react-redux'
import LevelStats from '../components/LevelStats/LevelStats'
import {
  playerAttacks, 
  playerHeals, 
  playerSpecials, 
  playerDies,
  playerStartAttackPhase,
  playerEndAttackPhase,
  playerStartSpecialPhase,
  playerEndSpecialPhase,
  playerStartHealPhase,
  playerEndHealPhase,
  needsLevelUp, 
  nextEnemy,
  enemyAttacks, 
  enemySpecials,
  enemyStartAttackPhase,
  enemyEndAttackPhase,
  enemyStartSpecialPhase,
  enemyEndSpecialPhase
} from '../actions'

const mapStateToProps = state => ({
  playerName: state.player.name,
  playerDmgTaken: state.levelStats.playerDmgTaken,
  playerHealAmt: state.levelStats.playerHealAmt,
  enemyDmgTaken: state.levelStats.enemyDmgTaken,
  moves: state.player.moves,
  stats: state.player.stats,
  playerAttack: state.player.moves.find(move => move.shortName === 'attack'),
  playerSpecial: state.player.moves.find(move => move.shortName === 'magic'),
  playerHealth: state.player.stats.health,
  playerStrength: state.player.stats.strength,
  playerDefense: state.player.stats.defense,
  playerMaxHealth: state.player.stats.maxHealth,
  playerMagic: state.player.stats.magic,
  playerMana: state.player.stats.mana,
  playerLevel: state.player.stats.level,
  playerCritChance: state.player.stats.critChance,
  playerHitCrit: state.levelStats.playerHitCrit,
  playerLastMove: state.levelStats.playerLastMove,
  enemyName: state.enemy.name,
  enemyHealth: state.enemy.health,
  enemyStrength: state.enemy.stats.strength,
  enemyAttack: state.enemy.moves.attack,
  enemySpecial: state.enemy.moves.specialAttack,
  enemyMaxHealth: state.enemy.stats.maxHealth,
  enemyDefense: state.enemy.stats.defense,
  enemyMagic: state.enemy.stats.magic,
  isLevelingUp: state.levelStats.isLevelingUp,
  enemysTurn: state.levelStats.enemysTurn
})

const mapDispatchToProps = {
  playerAttacks,
  playerHeals,
  playerSpecials,
  playerDies,
  playerStartAttackPhase,
  playerEndAttackPhase,
  playerStartSpecialPhase,
  playerEndSpecialPhase,
  playerStartHealPhase,
  playerEndHealPhase,
  needsLevelUp,
  nextEnemy,
  enemyAttacks,
  enemySpecials,
  enemyStartAttackPhase,
  enemyEndAttackPhase,
  enemyStartSpecialPhase,
  enemyEndSpecialPhase
}

const EnemyWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelStats)

export default EnemyWrapper
