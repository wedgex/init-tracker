import { clean, sort } from './Actors'


describe('sort', () => {
  it('sorts actors by initiative' , () => {
    const actors = [
      { init: 10, name: 'Snugglesworth' },
      { init: 20, name: 'Balasar' },
      { init: 1, name: 'Thorgrim' },
    ]

    expect(sort(actors)).toEqual([
      { init: 20, name: 'Balasar' },
      { init: 10, name: 'Snugglesworth' },
      { init: 1, name: 'Thorgrim' },
    ])
  })
})

describe('clean', () => {
  it('defaults init to 0 if empty string', () => {
    expect(clean({ init: '' })).toEqual({ init: 0 })
  })

  it('defaults init to 0 if null', () => {
    expect(clean({ init: null })).toEqual({ init: 0 })
  })

  it('defaults init to 0 if missing', () => {
    expect(clean({})).toEqual({ init: 0 })
  })
})
