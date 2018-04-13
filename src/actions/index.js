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
export const CLEAR_LOGIN="clear_login";
export const FETCH_MY_PROFILE="fetch_my_profile";


export const initialState = {
    ExtraExperiences: [
        {
            endDate: "04-01-2019",
            companyName: "Amazon",
            description: "Intern",
            title: "Intern",
            extraExperienceId: 8,
            startDate: "01-01-2019"
        }
    ],

    Projects: [
        {
            endDate: "12-31-2017",
            description: "Intern",
            projectName: "CNAO",
            projectId: 5,
            startDate: "12-12-2017"
        }
    ],

    Courses: [
        {
            courseName: "Intensive Foundations of CS",
            description: "Intensive Foundations of CS",
            courseId: "CS 5001"
        },
        {
            courseName: "Discrete and Data Structures",
            description: "Discrete and Data Structures",
            courseId: "CS 5002"
        },
        {
            courseName: "Object-Oriented Design",
            description: "Object-Oriented Design",
            courseId: "CS 5004"
        },
        {
            courseName: "Algorithms",
            description: "Algorithms",
            courseId: "CS 5006"
        },
        {
            courseName: "Computer Systems",
            description: "Computer Systems",
            courseId: "CS 5007"
        }
    ],

    WorkExperiences: [
        {
            workExperienceId: 1,
            companyName: "Amazon.com",
            startDate: "May 2017",
            endDate: "Sept 2017",
            currentJob: true,
            coop: true,
            title: "Software Engineer Intern",
            description: 'Work as SDE',
        },
        {
            workExperienceId: 2,
            neuId: 12345,
            companyName:"Zillow",
            startDate: 'May 2017',
            endDate: 'Sept 2017',
            currentJob: true,
            coop: true,
            title: 'Software Engineer',
            description: 'Work as SDE',
        },
    ],

    studentRecord: {
        neuId: "004",
        publicId: 0,
        entryYear: 2017,
        lastName: "Wood",
        address: "360 Huntington Ave",
        expectedLastYear: 2020,
        visible: false,
        gender: "M",
        city: "Boston",
        campus: "BOSTON",
        degree: "MASTERS",
        firstName: "Charles",
        entryTerm: "FALL",
        enrollmentStatus: "FULL_TIME",
        scholarship: false,
        middleName: "new",
        expectedLastTerm: "SUMMER",
        email: "Charles004@gmail.com",
        phone: "+1 (206)306-3178",
        address: "225 Terry Ave, Seattle, WA",
        linkedin: "www.linkedin.com/jesremy",
        github: "www.github.com/jeremy",
        facebook: "www.facebook.com/jeremy",
        website: "www.jeremy.com/home",
        summary: 'Hi, I am Yudong. I am a M.S. candidate in Computer Science from Northeastern University-Seattle' +
        'campus. Graduate date: June, 2018 (Expected) Please feel free to contact me via ' +
        'wangyudong53138@gmail.com',
        skill: "Java C C++",
    },

    Privacies: {
        visibleToPublic: true,
        github: true,
        website: true,
        address: true,
        neuId: "004",
        facebook: true,
        photo: true,
        project: true,
        linkedin: true,
        skill: true,
        course: true,
        extraExperience: true,
        publicId: 0,
        email: true,
        coop: true,
        phone: true
    }
};


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
    // console.log(data);
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

export function fetchMyProfile() {
  return {
    type: FETCH_MY_PROFILE,
    payload: {...initialState, skills:"Java\nPython\nC++\nRuby"}
  }
    // return (dispatch) => {
    //     console.log("yudong action");
    //     axios.get("http://rest.learncode.academy/api/reacttest/tweets")
    //         .then((response) => {
    //             console.log("FETCH_MY_PROFILE_SUCCEED", response);
    //             dispatch({type: FETCH_MY_PROFILE_DATA, payload: {...initialState, skills:"Java\nPython\nC++\nRuby"}});
    //         })
    // }
}
