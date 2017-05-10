import create from './create'
import { ADD, REMOVE } from './const'

export const add = actor => ({
  actor: create(actor),
  type: ADD,
})

export const remove = ({ id }) => ({
  id,
  type: REMOVE,
})

