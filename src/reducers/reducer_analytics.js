import { GET_ANALYTICS, SORT_ANALYTICS } from '../actions';

export default function (state=null,action ){
    switch (action.type) {
        case GET_ANALYTICS:
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


        return    {"yearlyratio":[
            {"year":"2018","male":400,"female":500},
            {"year":"2017","male":500,"female":400},
            {"year":"2016","male":200,"female":300},
            {"year":"2015","male":600,"female":500}
        ]};


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


        // console.log(action.payload);
        // return action.payload;
        case SORT_ANALYTICS:{
          // console.log(action);
          return action.payload;}
        default:
            return state;
    }
}
