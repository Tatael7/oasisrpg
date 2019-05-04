import {connect} from 'react-redux'
import ArrowButtons from '../components/ArrowButtons'


const mapStateToProps = (state) => ({
  isPlaying: state.levelStats.isPlaying
})

const mapDispatchToProps = {
}

const ArrowButtonWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArrowButtons)

export default ArrowButtonWrapper
