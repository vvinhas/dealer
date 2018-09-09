import { combineReducers } from 'redux'
import settings from './settingsReducer'
import positions from './positionsReducer'

export default combineReducers({
  settings,
  positions
})