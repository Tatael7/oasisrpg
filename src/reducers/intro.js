const initialState = {
  name: '',
  character: ''
}

const intro = (state = initialState, action) => {
  switch (action.type) {
    case 'INTRO_CHOOSE_NAME':
      return {
        ...state,
        character: action.name
      }
    case 'INTRO_CHOOSE_CHARACTER':
      return {
        ...state,
        character: action.character
      }
    default:
      return state
  }
}

export default intro