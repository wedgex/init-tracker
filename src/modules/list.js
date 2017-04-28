export const SELECT = 'List/SELECT_ACTOR'

export const select = ({ id }) => ({
  id,
  type: SELECT,
})

export const initState = {
  selectedActorId: null,
  sortedActorIds: [],
}

export default (state = initState, action) => {
  switch(action.type) {
    case SELECT:
      return {
        ...state,
        selectedActorId: action.id,
      }
    default:
      return state
  }
}
