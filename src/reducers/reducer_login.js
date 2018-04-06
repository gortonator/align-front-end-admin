import { DO_LOGIN, CHECK_LOGIN, DO_LOGOUT, CLEAR_LOGIN } from '../actions';

export default function (state=null,action ){
  switch (action.type) {
    case DO_LOGIN:
      {
          console.log(action);
          return action.payload.status==200?action.payload.data || "Error":"Error";
      }
    case CHECK_LOGIN:
      return action.payload || "";
    case CLEAR_LOGIN:
      return action.payload;
    case DO_LOGOUT:
      return null;
    default:
      return state;
  }
}
