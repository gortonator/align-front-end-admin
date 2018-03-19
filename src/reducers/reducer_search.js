import { SEARCH_STUDENT } from '../actions';

export default function(state=null,action){
  switch (action.type) {
    case SEARCH_STUDENT:
      { console.log(action.payload.data);
      return action.payload.data;
      }
    default:
      return state;
  }
}
