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

export const sort = actors => (
  [...actors].sort(byInit)
)

export const create = actor => ({
  id: uuid(),
  name: actor.name,
  init: parseInt(actor.init, 10) || 0,
})

export const clean = actor => {
  if (!actor.init) {
    return { ...actor, init: 0 }
  }

  return actor
}
