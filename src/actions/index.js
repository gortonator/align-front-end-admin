import axios from 'axios';

// const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const ROOT_URL = 'http://asd2.ccs.neu.edu:8080/webapi';
// const ROOT_URL = '';
const ROOT_URL_ANALYTICS = ROOT_URL + '/analytics';
const API_KEY = '?key=STUDENT12345';
const token="eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..RhkeytG5GSaoAcn7l-vjKw.cwBol4yJoF8IhzNSw5n7oKnqx38dDtt54sIKZGRBWrd5a6cDy4avH6IzGG1XfkDvDsAxnqA3wFiO83MgUfLQA25EQQazkRQr_sRFWiRxRQY.it38_7BlRQ-F4I-nBgOeMg";

export const SEARCH_STUDENT="search_student";
export const FETCH_STUDENT="fetch_student";
export const SELECT_PAGE="select_page";
export const GET_ANALYTICS="get_analytics";
export const SORT_ANALYTICS="sort_analytics";

export function searchStudent(filters){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
      type: SEARCH_STUDENT,
      payload: request
    };
}

export function fetchStudent(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_STUDENT,
    payload:request
  };

}

export function selectPage(page){
  return {
    type:SELECT_PAGE,
    payload:page
  };
}


export function getAnalytics(chartRequest, callback){
    console.log(chartRequest);
    const request = axios.post(`${ROOT_URL_ANALYTICS}/${chartRequest.url}`,chartRequest.body,{headers:{"Content-Type":"application/json","token":token}}).then(()=>{
        callback(chartRequest.url);
    });
    return {
      type: GET_ANALYTICS,
      payload: request
    };
}

export function sortAnalytics(data){
    console.log(data);
    return {
      type: SORT_ANALYTICS,
      payload: data
    };
}
