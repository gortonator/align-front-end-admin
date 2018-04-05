import { DO_LOGIN } from '../actions';

export default function (state=null,action ){
  switch (action.type) {
    case DO_LOGIN:
      return action.payload.data || "";
    default:
      return state;
  }
}
