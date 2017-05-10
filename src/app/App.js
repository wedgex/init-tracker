import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import Root from './routes/Root'
import './App.css';
import 'bulma/css/bulma.css'
import createStore from './store'

const store = createStore()

export default () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Root} />
    </Router>
  </Provider>
)
