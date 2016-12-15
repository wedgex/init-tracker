import React from 'react'
import App from './App'
import {
  load as loadActors,
  save as saveActors,
} from './Actors'

export default () => (
  <App actors={loadActors()} saveActors={saveActors} />
)
