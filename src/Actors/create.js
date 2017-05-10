import uuid from 'uuid/v4'

export default actor => ({
  id: uuid(),
  name: actor.name,
  init: parseInt(actor.init, 10) || 0,
})
