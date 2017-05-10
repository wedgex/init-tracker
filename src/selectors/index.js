import sortActors from '../Actors/sort'

export const selectSelectedActorId = state => state.list.selectedActorId

export const selectActors = state => ids => (
  ids.map(id => state.actors.byId[id])
)

export const selectAllActors = state => selectActors(state)(Object.keys(state.actors.byId))

export const selectSortedActors = state => sortActors(selectAllActors(state))
