import { create as createActor } from '../lib/Actors'
import { ADD, REMOVE } from './const'

export const add = actor => ({
  actor: createActor(actor),
  type: ADD,
})

export const remove = ({ id }) => ({
  id,
  type: REMOVE,
})

