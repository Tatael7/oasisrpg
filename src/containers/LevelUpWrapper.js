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
