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
