import { GET_ANALYTICS, SORT_ANALYTICS } from '../actions';
import {doLogout} from '../actions';

export default function (state=null,action ){
    if(action && action.payload && action.payload.response && action.payload.response.status==406){
      alert("Session Expired. Please login again");
      doLogout();
    }
    switch (action.type) {
        case GET_ANALYTICS:

            //top 10 employers
            // return {"employers":[
            //   {"name":"Amazon","students":90},
            //   {"name":"Apple","students":80},
            //   {"name":"IBM","students":95},
            //   {"name":"Facebook","students":85},
            //   {"name":"MathWorks","students":75},
            //   {"name":"Google","students":45},
            //   {"name":"HubSpot","students":55},
            //   {"name":"NYL","students":110},
            //   {"name":"Palantir","students":60},
            //   {"name":"Fidelity","students":70}]};

            //top 10 electives
            // return {
            //     "electives":
            //         [
            //             {"elective": "course Z", "students": 90},
            //             {"elective": "course X", "students": 20},
            //             {"elective": "course D", "students": 30},
            //             {"elective": "course S", "students": 40},
            //             {"elective": "course E", "students": 80},
            //             {"elective": "course F", "students": 60},
            //             {"elective": "course V", "students": 20},
            //             {"elective": "course G", "students": 80},
            //             {"elective": "course T", "students": 10},
            //             {"elective": "course H", "students": 100}
            //         ]
            // };


            // undergrad institutions
            // return {
            //     "institutionlist":[
            //         {
            //             "name"    :    "NEU",
            //             "count"    :    10
            //         },
            //         {
            //             "name"    :    "ABC",
            //             "count"    :    20
            //         },
            //         {
            //             "name"    :    "XYZ",
            //             "count"    :    110
            //         },
            //         {
            //             "name"    :    "PQR",
            //             "count"    :    40
            //         }
            //     ]
            // };


            // top bachelors degree
            // return { "degrees":
            //         [
            //             {"degree":"Degree Z","students":70},
            //             {"degree":"Degree y","students":30},
            //             {"degree":"Degree 1","students":90},
            //             {"degree":"Degree as","students":40},
            //             {"degree":"Degree tr","students":60},
            //             {"degree":"Degree Zcv","students":20},
            //             {"degree":"Degree Z34","students":110},
            //             {"degree":"Degree Zds","students":80},
            //             {"degree":"Degree Z67","students":20},
            //             {"degree":"Degree Zdg","students":100}
            //         ]
            // };
            // gender ratio
        // return    {"yearlyratio":[
        //     {"year":"2018","male":400,"female":500},
        //     {"year":"2017","male":500,"female":400},
        //     {"year":"2016","male":200,"female":300},
        //     {"year":"2015","male":600,"female":500}
        // ]};


            // coop student
            // return {"studentList":[
            //         {
            //             "name":    "Rohit",
            //             "nuid":    "00123456",
            //             "companies":    ["Apple","IBM"]
            //         },
            //         {
            //             "name"    :    "Manu",
            //             "nuid"        :    "00123457",
            //             "companies"    :    ["Facebook","NYL"]
            //         },
            //         {
            //             "name"    :    "Zhe",
            //             "nuid"        :    "00123458",
            //             "companies"    :    ["Google","Linkedin"]
            //         },
            //         {
            //             "name"    :    "Ales",
            //             "nuid"        :    "00123459",
            //             "companies"    :    ["Delloit","Hubspot"]
            //         }
            //     ]
            // };


            // working
            // return {"studentList":[
            //         {
            //             "name":    "Rohit",
            //             "nuid":    "00123456",
            //             "company":    "Apple"
            //         },
            //         {
            //             "name"    :    "Manu",
            //             "nuid"        :    "00123457",
            //             "company"    :    "Facebook"
            //         },
            //         {
            //             "name"    :    "Zhe",
            //             "nuid"        :    "00123458",
            //             "company"    :    "Google"
            //         },
            //         {
            //             "name"    :    "Ales",
            //             "nuid"        :    "00123459",
            //             "company"    :    "Hubspot"
            //         }
            //     ]
            // };


        //company
        // return  {"students":[{
        //     "name":"student A",
        //     "nuid":"0012345"
        // },{
        //     "name":"student B",
        //     "nuid":"0012346"
        // },{
        //     "name":"student C",
        //     "nuid":"0012347"
        // }]};


        console.log(action);
        return action.payload.data;
        case SORT_ANALYTICS:{
          // console.log(action);
          return action.payload;}
        default:
            return state;
    }
}
