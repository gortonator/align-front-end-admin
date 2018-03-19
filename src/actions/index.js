import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=STUDENT12345';

export const SEARCH_STUDENT="search_student";
export const FETCH_STUDENT="fetch_student";
export const SELECT_PAGE="select_page";
export const OPEN_ANALYTICS="open_analytics";
export const GET_ANALYTICS="get_analytics";

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

export function openAnalytics(){
  return {
    type:OPEN_ANALYTICS,
    payload:true
  }
}

export function getAnalytics(chartRequest){
    console.log(chartRequest);
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
      type: GET_ANALYTICS,
      payload: request
    };
}
