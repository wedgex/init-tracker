import reducer, {
  SELECT,
  select,
  initState,
  selectSelectedActorId,
} from './list'
import { add } from './actors'

describe('select', () => {
  it(`creates action with ${SELECT} type`, () => {
    const action = select({ id: '1' })
    expect(action.type).toEqual(SELECT)
  })

  it('creates action with id', () => {
    const action = select({ id: '1' })
    expect(action.id).toEqual('1')
  })
})

describe('reducer', () => {
  it(`${SELECT} sets selectedActorId`, () => {
    const state = reducer(initState, select({ id: '1' }))
    expect(state.selectedActorId).toEqual('1')
  })
})
