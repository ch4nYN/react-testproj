import { combineReducers } from 'redux';
import propReducer from './propReducer'

export default combineReducers({
  properties: propReducer
});