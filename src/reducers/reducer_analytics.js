import { GET_ANALYTICS } from '../actions';

export default function (state=null,action ){
    switch (action.type) {
        case GET_ANALYTICS:
            return {"yearlyratio":[
            {"year":"2018","male":400,"female":500},
            {"year":"2017","male":500,"female":400},
            {"year":"2016","male":200,"female":300},
            {"year":"2015","male":600,"female":500}
        ]};

        // {"students":[{
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
        default:
            return state;
    }
}
