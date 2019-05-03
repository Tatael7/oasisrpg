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
