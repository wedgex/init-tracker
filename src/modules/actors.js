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
  actors: [],
}

export const selectActors = state => state.actors.actors

export default (state = initState, action) => {
  switch(action.type) {
    case ADD:
      return {
        ...state,
        actors: [...state.actors, action.actor],
      }
    case REMOVE:
      return {
        ...state,
        actors: state.actors.filter(({ id }) => id !== action.id),
      }
    default:
      return state
  }
}
