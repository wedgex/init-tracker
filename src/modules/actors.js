import { dissoc } from 'ramda'
import {
  create as createActor,
} from '../lib/Actors'

export const ADD = 'Actors/ADD'
export const REMOVE = 'Actors/REMOVE'

export const add = actor => ({
  actor: createActor(actor),
  type: ADD,
})

export const remove = ({ id }) => ({
  id,
  type: REMOVE,
})

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
