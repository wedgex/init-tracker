import uuid from 'uuid/v4'

const byInit = (actor1, actor2) => {
  if (actor1.init < actor2.init) {
    return 1
  }

  if (actor1.init > actor2.init) {
    return -1
  }

  return 0
}

export const sort = actors => {
  return [...actors].sort(byInit)
}

export const create = actor => ({
  id: uuid(),
  name: actor.name,
  init: parseInt(actor.init) || 0,
})

export const clean = actor => {
  if (!actor.init) {
    return { ...actor, init: 0 }
  }

  return actor
}

export const ACTORS_STORE_KEY = 'actors'

export const load = () => (
  JSON.parse(window.localStorage.getItem(ACTORS_STORE_KEY)) || []
)

export const save = actors => {
  window.localStorage.setItem(ACTORS_STORE_KEY, JSON.stringify(actors))
}
