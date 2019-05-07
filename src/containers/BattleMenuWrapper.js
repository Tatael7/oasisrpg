import {connect} from 'react-redux'
import BattleMenu from '../components/BattleMenu'

const mapStateToProps = (state) => ({
  isPlaying: state.levelStats.isPlaying
})

const mapDispatchToProps = {
}

const BattleMenuWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleMenu)

export default BattleMenuWrapper
