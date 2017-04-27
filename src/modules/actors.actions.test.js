import {
  ADD,
  add,
  REMOVE,
  remove,
} from './actors'

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
