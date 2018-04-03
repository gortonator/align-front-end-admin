import axios from 'axios';

const ROOT_TEST = 'http://reduxblog.herokuapp.com/api';
const ROOT_URL = 'http://asd2.ccs.neu.edu:8081';
// const ROOT_URL = '';
const ROOT_URL_ANALYTICS = ROOT_URL + '/analytics';
const API_KEY = '?key=STUDENT12345';
const token="eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..NCAPM_xHpMEqgAdl0QMoXA.-FDoAiAQ9px2jVg0SLoFaKlKnd1XIxStTBsszvhcYf4gCW25VCDee97g2_a6ceayWCeYt4m8MVda5ECZIrYhdx6xC69lfRHmnjI3OCdY9ns.r0gOUAEZD9rj4CSgJ9qnlA";

export const SEARCH_STUDENT="search_student";
export const FETCH_STUDENT="fetch_student";
export const SELECT_PAGE="select_page";
export const GET_ANALYTICS="get_analytics";
export const SORT_ANALYTICS="sort_analytics";

export function searchStudent(filters){
    const request = axios.get(`${ROOT_TEST}/posts${API_KEY}`);

    return {
      type: SEARCH_STUDENT,
      payload: request
    };
}

export function fetchStudent(id){
  const request = axios.get(`${ROOT_TEST}/posts/${id}${API_KEY}`);
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
    // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`).then(()=>{
    // const request = axios.post(`${ROOT_URL_ANALYTICS}/${chartRequest.url}`,{"campus":"boston"},{headers:{"Content-Type":"application/json","token":token}}).then(()=>{
    //     callback(chartRequest.url);
    // });
    // const request = axios.post(`http://asd2.ccs.neu.edu:8080/top-undergradschools`,{},{headers:{"Content-Type":"application/json","token":token}});
    const request = axios.post(`${ROOT_URL_ANALYTICS}/${chartRequest.url}`,chartRequest.body,{headers:{"Content-Type":"application/json","token":token}});
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
