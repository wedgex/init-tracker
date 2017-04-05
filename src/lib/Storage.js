export const ACTORS_STORE_KEY = 'actors'

export const load = () => (
  JSON.parse(window.localStorage.getItem(ACTORS_STORE_KEY)) || []
)

export const save = actors => {
  window.localStorage.setItem(ACTORS_STORE_KEY, JSON.stringify(actors))
}
