import axios from 'axios';

const ROOT_TEST = 'http://reduxblog.herokuapp.com/api';
const ROOT_URL = 'http://asd2.ccs.neu.edu:8081';
const ROOT_URL_ANALYTICS = ROOT_URL + '/analytics';
const API_KEY = '?key=STUDENT12345';

export const SEARCH_STUDENT="search_student";
export const FETCH_STUDENT="fetch_student";
export const SELECT_PAGE="select_page";
export const GET_ANALYTICS="get_analytics";
export const SORT_ANALYTICS="sort_analytics";
export const DO_LOGIN="do_login";
export const CHECK_LOGIN="check_login";
export const DO_LOGOUT="do_logout";
export const CLEAR_LOGIN="cleear_login";

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


export function getAnalytics(chartRequest, token){
    // console.log(chartRequest);
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

export function doLogin(body){
  const request = axios.post(`${ROOT_URL}/login`,body,{headers:{"Content-Type":"application/json"}});
  return {
    type: DO_LOGIN,
    payload:request
  }
}

export function clearLogin(){
  return {
    type:CLEAR_LOGIN,
    payload: null
  }
}
export function checkLogin(){
  var sessionID=sessionStorage.getItem("mscs_align_neu_id");
  var sessionToken=sessionStorage.getItem("mscs_align_neu_token");
  if(!(sessionID && sessionToken)){
    window.location.replace("/");
  }else{
    return{
        type:CHECK_LOGIN,
        payload: {id:sessionID,token:sessionToken}
    }
  }
}

export function doLogout(){
  sessionStorage.removeItem("mscs_align_neu_id");
  sessionStorage.removeItem("mscs_align_neu_token");
  window.location.replace("/");
  return {
    type:DO_LOGOUT,
    payload:null
  }
}
