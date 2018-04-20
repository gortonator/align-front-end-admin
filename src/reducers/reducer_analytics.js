import { GET_ANALYTICS, SORT_ANALYTICS } from '../actions';
import {doLogout} from '../actions';

export default function (state=null,action ){
    if(action && action.payload && action.payload.response && action.payload.response.status==406){
      alert("Session Expired. Please login again");
      doLogout();
    }
    switch (action.type) {
        case GET_ANALYTICS:
          return action.payload.data;
        case SORT_ANALYTICS:{
          return action.payload;}
        default:
            return state;
    }
}
