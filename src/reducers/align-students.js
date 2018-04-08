import * as actions from '../actions/align-students-actions';
import {combineReducers} from 'redux';
import {ASYNC_ACTION_STATUSES, GENDER_OPTIONS, TOKEN} from "../constants";


const initialStudents = [
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "2",
        name: "B",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "3",
        name: "C",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "4",
        name: "D",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "5",
        name: "E",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    }
];

const initialStudentProfiles = [
    {
        nuid: "1",
        retrievalStatus: ASYNC_ACTION_STATUSES.SUCCESS,
        personalInformation: {name: 'haha'},
    }
];

const initialNotes = [
    {
        noteId: '1',
        nuid: '1',
        title: '1',
        desc: '1'
    },
    {
        noteId: '2',
        nuid: '1',
        title: '2',
        desc: '2'
    }
];



const initalStudentsState = {
    retrievalStatus: ASYNC_ACTION_STATUSES.SUCCESS,
    items: initialStudents,
    studentFilters: {
        nameOrId: '',
        campus: [],
        enrollmentStatus: [],
        coop: '',
        gender: GENDER_OPTIONS.ANY.value,
        race: '',
        undergradMajor: '',
        nuUndergrad: false
    },
    failedStudentRetrieval: null,
    pagination:{
        total: 20,
        current: 1
    }
};
function token(state=TOKEN,action){
    return state;
}

function students(state=initalStudentsState,action){
    switch (action.type){
        case actions.STUDENT_RETRIEVAL_REQUEST:
            return Object.assign({},state,{
                retrievalStatus: ASYNC_ACTION_STATUSES.ONGOING
            });
        case actions.STUDENT_RETRIEVAL_SUCCESS:
            return Object.assign({},state,{
                items: action.students,
                studentFilters: action.studentFilters,
                retrievalStatus: ASYNC_ACTION_STATUSES.SUCCESS,
                pagination:{
                    total: action.totalPage,
                    current: action.currentPage
                }});
        case actions.STUDENT_RETRIEVAL_FAILURE:
            return Object.assign({},state,{
                retrievalStatus: ASYNC_ACTION_STATUSES.FAILURE,
                failedStudentRetrieval: {
                    studentFilters: action.studentFilters,
                    page: action.page
                }
            });
        case actions.ACCEPT_RETRIEVAL_FAILURE:
            return Object.assign({},state,{
                retrievalStatus: ASYNC_ACTION_STATUSES.SUCCESS
            });
        default:
            return state;
    }
}

function studentProfiles(state=initialStudentProfiles,action){
    switch(action.type){
        case actions.STUDENT_PROFILE_RETRIEVAL_REQUEST:
            if (state.find(p => p.nuid === action.nuid) === undefined){
                state.push(
                    {
                        nuid: action.nuid,
                        retrievalStatus: ASYNC_ACTION_STATUSES.ONGOING,
                        personalInformation: null
                    });
                return state.slice();
            } else {
                return state.map(p => p.nuid === action.nuid ?
                    {
                        nuid: p.nuid,
                        retrievalStatus: ASYNC_ACTION_STATUSES.ONGOING,
                        personalInformation: null
                    } : p);
            }
        case actions.STUDENT_PROFILE_RETRIEVAL_SUCCESS:
            return state.map(p => p.nuid === action.nuid ?
                {
                nuid: p.nuid,
                retrievalStatus: ASYNC_ACTION_STATUSES.SUCCESS,
                personalInformation: action.profile
                } : p);
        default:
            return state;
    }
}

function notes(state=initialNotes,action){
    switch(action.type){
        case actions.STUDENT_PROFILE_RETRIEVAL_SUCCESS:
            return state.concat(action.profile.notes.map(n => ({
                nuid: n.neuId,
                adminId: n.administratorNeuId,
                noteId: n.administratorNoteId,
                title: n.title,
                desc: n.desc
            })));
        default:
            return state;
    }
}

export default combineReducers({
    token,
    students,
    studentProfiles,
    notes
});


