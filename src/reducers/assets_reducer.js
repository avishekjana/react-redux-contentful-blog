import { FETCH_ASSET } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_ASSET:
    return [ action.payload.data, ...state];
  default:
    return state;
  }
}
