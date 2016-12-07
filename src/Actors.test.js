import { clean, sort, load, save, ACTORS_STORE_KEY } from './Actors'

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

describe('load', () => {
  afterEach(() => {
    window.localStorage.clear()
  })

  it('fetches and parses actors json', () => {
    const actors = [{ init: 1, name: 'Snuglesworth' }]
    window.localStorage.setItem(
      ACTORS_STORE_KEY,
      JSON.stringify(actors)
    )
    expect(load()).toEqual(actors)
  })

  it('returns an empty array if no actors are in localstorage', () => {
    expect(load()).toEqual([])
  })
})

describe('save', () => {
  afterEach(() => {
    window.localStorage.clear()
  })

  it('saves actors json to localstorage', () => {
    const actors = [{ init: 1, name: 'Snuglesworth' }]
    save(actors)

    expect(window.localStorage.getItem('actors')).toEqual(JSON.stringify(actors))
  })
})
