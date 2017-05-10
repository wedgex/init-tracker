import { combineReducers } from 'redux'
import actors from './Actors/reducer'
import list from './modules/list'

export default combineReducers({
  actors,
  list,
})
