import {combineReducers} from 'redux'
import intro from './intro'
import levelUp from './levelUp'
import player from './player'
import enemy from './enemy'
import levelStats from './levelStats'

const reducer = combineReducers({
  intro,
  levelUp,
  player,
  enemy,
  levelStats
})

export default reducer
