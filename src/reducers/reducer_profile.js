import { FETCH_STUDENT } from '../actions';

export default function (state=null,action ){
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload.data || false;
    default:
      return state;
  }
}
