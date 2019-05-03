const levelUp = (state = {}, action) => {
  switch (action.type) {
    case 'LEVEL_UP_STAT_CHOOSE':
      return {
        ...state,
        statChoice: action.stat
      }
    default:
      return state
  }
}

export default levelUp