import { TOGGLE_SHOW_PROFILE } from './actions'

const initialState = {
  isToggle: true
}

export const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case TOGGLE_SHOW_PROFILE: {
      return {
        isToggle: !state.isToggle
      }
    }
    default: {
      return state
    }
  }
}
