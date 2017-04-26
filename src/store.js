import { compose, createStore } from 'redux'
import reducer from './reducer'
import persistState from 'redux-localstorage'

const enhancers = compose(
  persistState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default () => createStore(
  reducer,
  enhancers,
)
