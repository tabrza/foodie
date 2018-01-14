import { FETCH_DATA } from '../actions/types';

export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_DATA:
      return action.payload || false;
    default:
      return state;
  }
}
