import reducer, { initState, ADD, REMOVE } from './actors'

const createState = () => ({
  ...initState,
  actors: [
    { id: '1', name: 'Magnus', init: 15 },
  ],
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
    const state = reducer(init, { type: ADD, actor })
    expect(state.actors).toEqual([ ...init.actors, actor ])
  })
})

describe('remove', () => {
  const init = createState()
  const state = reducer(init, { type: REMOVE, id: '1' })
  expect(state.actors).toEqual([])
})
