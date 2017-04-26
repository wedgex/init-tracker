import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Root from './routes/Root'

export default () => (
  <Router>
    <Route exact path="/" component={Root} />
  </Router>
)
