import { load, save, ACTORS_STORE_KEY } from './Storage'

describe('load', () => {
  afterEach(() => {
    window.localStorage.clear()
  })

  it('fetches and parses actors json', () => {
    const actors = [{ init: 1, name: 'Snuglesworth' }]
    window.localStorage.setItem(
      ACTORS_STORE_KEY,
      JSON.stringify(actors),
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
