import reducer, {
  initState,
  add,
  ADD,
  REMOVE
} from './actors'

const createState = () => ({
  ...initState,
  byId: {
    1: { id: '1', name: 'Magnus', init: 15 },
  }
})

it('returns initial state', () => {
  const init = createState()
  const state = reducer(init, {})
  expect(state).toEqual(init)
})

describe('add', () => {
  it('adds actor to actors', () => {
    const actor = { name: 'Taako', init: 10 }
    const init = createState()
    const addAction = add(actor)
    const state = reducer(init, addAction)
    expect(state.byId).toEqual({
      ...init.byId,
      [addAction.actor.id]: addAction.actor,
    })
  })
})

describe('remove', () => {
  it('removes actor', () => {
    const init = createState()
    const state = reducer(init, { type: REMOVE, id: '1' })
    expect(state.byId).toEqual({})
  })
})
