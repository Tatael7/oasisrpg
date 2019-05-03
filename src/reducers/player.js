import {initialState} from '../playerData.js'

const player = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_MOVE_PREREQS':
      let newMoves = state.potentialMoves.filter(move => {
        let key = Object.keys(move.preReqs)[0]
        return (state.stats[key] >= move.preReqs[key])
      })
      let potentialMoves = state.potentialMoves.filter(potentialMove => {
        let booleanVal = true
        newMoves.forEach(newMove => {
          if (newMove === potentialMove) booleanVal = false
        })
        return booleanVal
      })
      return {
        ...state,
        moves: [...state.moves, ...newMoves],
        potentialMoves: potentialMoves
      } 
    case 'ENEMY_ATTACKS':
      return {
        ...state,
        stats: {
          ...state.stats,
          health: 
            action.enemyHealth > 0 ?
            state.stats.health - action.damage : state.stats.health
        }
      } 
    case 'ENEMY_SPECIALS':
      if (action.enemyHealth > 0) {
        return {
          ...state,
          stats: {
            ...state.stats,
            health: state.stats.health - action.damage
          }
        }
      } else {
        return state
      }
    case 'PLAYER_HEALS':
      return {
        ...state,
        stats: {
          ...state.stats,
          health: 
            action.currentHealth + action.healAmt < action.maxHealth ?
            action.currentHealth + action.healAmt : action.maxHealth,
          mana: state.stats.mana - 1
        }
      }
    case 'PLAYER_SPECIALS':
      return {
        ...state,
        stats: {
          ...state.stats,
          mana: state.stats.mana - 1
        }
      }
    case 'INTRO_SUBMIT': {
      let [health, statBoost] = [state.stats.health, 1]
      if (action.stat === 'maxHealth') {
        [health, statBoost] = [state.stats.health + 20, 20]
      }
      return {
        ...state,
        name: action.name || state.name,
        img: action.img,
        imgName: action.imgName,
        stats: {
          ...state.stats,
          level: state.stats.level + 1,
          health: health,
          [action.stat]: state.stats[action.stat] + statBoost
        }
      }
    }
    case 'LEVEL_UP': {
      let [health, statBoost] = [state.stats.health, 1]
      if (action.stat === 'maxHealth') {
        [health, statBoost] = [state.stats.health + 20, 20]
      }
      let mana = 
        action.stat === 'magic' && state.stats.magic % 3 === 0 ?
        state.stats.maxMana + 1 : state.stats.maxMana
      mana = (state.stats.level + 1) % 5 === 0 ?
        mana + 1 : mana
      return {
        ...state,
        stats: {
          ...state.stats,
          level: state.stats.level + 1,
          health: health,
          mana: mana,
          maxMana: mana,
          [action.stat]: state.stats[action.stat] + statBoost
        }
      }
    }
    case 'PLAYER_DIES': 
      return {
        ...state,
        stats: {
          ...state.stats,
          health: 0
        },
        alive: false
      }
    case 'PLAYER_START_ATTACK_PHASE':
      return {
        ...state,
        isAttacking: true
      }
    case 'PLAYER_END_ATTACK_PHASE':
      return {
        ...state,
        isAttacking: false
      }
    case 'PLAYER_START_SPECIAL_PHASE':
      return {
        ...state,
        isSpecialing: true
      }
    case 'PLAYER_END_SPECIAL_PHASE':
      return {
        ...state,
        isSpecialing: false
      }
    case 'PLAYER_START_HEAL_PHASE':
      return {
        ...state,
        isHealing: true
      }
    case 'PLAYER_END_HEAL_PHASE':
      return {
        ...state,
        isHealing: false
      }
    default:
      return state
  }
}

export default player