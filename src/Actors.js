import {
  create as createActor,
} from './lib/Actors'

export const ADD = 'Actors/ADD'
export const REMOVE = 'Actors/REMOVE'
export const EXPAND = 'Actors/EXPAND'

export const add = actor => ({
  actor: createActor(actor),
  type: ADD,
})

export const remove = ({ id }) => ({
  id,
  type: REMOVE,
})

export const expand = ({ id }) => ({
  id,
  type: EXPAND,
})

export const initState = {
  actors: [],
  expanded: null,
}

export const selectActors = state => state.actors.actors
export const selectExpanded = state => state.actors.expanded

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
    case EXPAND:
      return {
        ...state,
        expanded: action.id,
      }
    default:
      return state
  }
}
