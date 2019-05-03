const data = require('../enemyData.json')

const initialEnemy = data[0]
initialEnemy.health = initialEnemy.stats.maxHealth
initialEnemy.isAttacking = false
initialEnemy.isSpecialing = false
initialEnemy.counter = 0

const enemy = (state = initialEnemy, action) => {
  switch (action.type) {
    case 'INCREASE_ENEMY_COUNTER':
      return {
        ...state,
        counter: ++state.counter
      }
    case 'PLAYER_ATTACKS':
      if (state.health >= 0) {
        return {
          ...state,
          health: action.crit ?
            state.health - (action.damage * 2) : state.health - action.damage
        } 
      } else {
        return state
      }
    case 'PLAYER_SPECIALS':
      if (state.health >= 0) {
        return {
          ...state,
          health: state.health - action.damage
        }
      } else {
        return state
      }
    case 'NEXT_ENEMY':
      if (data[state.counter]) {
        return Object.assign({}, data[state.counter], {
          health: data[state.counter].stats.maxHealth,
          isAttacking: false,
          isSpecialing: false,
          counter: state.counter
        })
      } else {
        return state
      }
    case 'ENEMY_START_ATTACK_PHASE':
      return {
        ...state,
        isAttacking: true
      }
    case 'ENEMY_END_ATTACK_PHASE':
      return {
        ...state,
        isAttacking: false
      }
    case 'ENEMY_START_SPECIAL_PHASE':
        return {
          ...state,
          isSpecialing: true
        }
    case 'ENEMY_END_SPECIAL_PHASE':
      return {
        ...state,
        isSpecialing: false
      }
    default:
      return state
  }
}

export default enemy
