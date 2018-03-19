import { SELECT_PAGE } from '../actions';

export default function (state=null,action ){
  switch (action.type) {
    case SELECT_PAGE:
      return action.payload;
    default:
      return state;
  }
}
