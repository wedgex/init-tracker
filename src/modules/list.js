export const SELECT = 'List/SELECT_ACTOR'

export const select = ({ id }) => ({
  id,
  type: SELECT,
})

export const initState = {
  selectedActorId: null,
}

export const selectSelectedActorId = state => state.list.selectedActorId

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
