import { GET_PROPS, GET_PROP } from '../actions';
export default function(state = [], action) {
  switch(action.type) {
    case GET_PROPS:
      return action.payload;
    case GET_PROP:
      return action.payload;
    default:
      return state;
  }
}