import reducer, {
  initState,
  add,
  ADD,
  remove,
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

describe('reducer', () => {
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
})

describe('actions', () => {
  describe('add', () => {
    it(`creates action with ${ADD} type`, () => {
      const action = add({ name: 'Magnus' })
      expect(action.type).toEqual(ADD)
    })

    it('creates actor with name and init', () => {
      const action = add({ name: 'Magnus', init: 5 })
      expect(action.actor.name).toEqual('Magnus')
      expect(action.actor.init).toEqual(5)
    })

    it('creates actor with id', () => {
      const action = add({ name: 'Magnus', init: 5 })
      expect(action.actor.id).not.toEqual(undefined)
    })
  })

  describe('remove', () => {
    it(`creates action with ${REMOVE} type`, () => {
      const action = remove({ name: 'Merle', id: '1' })
      expect(action.type).toEqual(REMOVE)
    })

    it('creates action with id', () => {
      const action = remove({ name: 'Merle', id: '1' })
      expect(action.id).toEqual('1')
    })
  })
})
