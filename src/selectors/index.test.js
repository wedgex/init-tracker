import { selectSelectedActorId } from '.'

describe('selectSelectedActorId', () => {
  it('returns selectedActorId', () => {
    const state = {
      list: {
        selectedActorId: '1',
      }
    }
    expect(selectSelectedActorId(state)).toEqual('1')
  })
})

