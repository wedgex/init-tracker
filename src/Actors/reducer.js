import { dissoc } from 'ramda'
import { ADD, REMOVE } from './const'

export const initState = {
  byId: {},
}

export default (state = initState, action) => {
  switch(action.type) {
    case ADD:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.actor.id]: action.actor,
        }
      }

    case REMOVE:
      return {
        ...state,
        byId: dissoc(action.id, state.byId),
      }

    default:
      return state
  }
}
