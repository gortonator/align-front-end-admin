import { OPEN_ANALYTICS } from '../actions';

export default function (state=null,action ){
  switch (action.type) {
    case OPEN_ANALYTICS:
      return action.payload;
    default:
      return state;
  }
}
