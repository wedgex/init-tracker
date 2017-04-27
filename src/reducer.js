import { combineReducers } from 'redux'
import actors from './modules/actors'
import list from './modules/list'

export default combineReducers({
  actors,
  list,
})
