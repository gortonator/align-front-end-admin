import * as actions from '../actions/align-students-actions';
import {combineReducers} from 'redux';
import {ASYNC_ACTION_STATUSES, GENDER_OPTIONS, NOTE_CREATION_PLACE_HOLDER, TOKEN,ADMIN_ID} from "../constants";


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

function adminId(state=ADMIN_ID,action){
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
        case actions.ACCEPT_STUDENT_RETRIEVAL_FAILURE:
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
        case actions.STUDENT_PROFILE_RETRIEVAL_FAILURE:
            return state.map(p => p.nuid === action.nuid ?
                {
                    nuid: p.nuid,
                    retrievalStatus: ASYNC_ACTION_STATUSES.FAILURE,
                    personalInformation: null
                } : p);
        case actions.ACCEPT_PROFILE_RETRIEVAL_FAILURE:
            return state.map(p => p.nuid === action.nuid ?
                {
                    nuid: p.nuid,
                    retrievalStatus: ASYNC_ACTION_STATUSES.SUCCESS,
                    personalInformation: null
                }: p);
        default:
            return state;
    }
}

function notes(state=initialNotes,action){
    switch(action.type){
        case actions.STUDENT_PROFILE_RETRIEVAL_SUCCESS:
            return state.concat(action.notes);
        case actions.NOTE_CREATION_REQUEST:
        case actions.NOTE_UPDATE_REQUEST:
        case actions.NOTE_DELETION_REQUEST:
            return state.slice();
        case actions.NOTE_CREATION_SUCCESS:
            state.push(action.note);
            action.callback();
            return state.slice();
        case actions.NOTE_CREATION_FAILURE:
            action.callback();
            return state.slice();
        case actions.NOTE_UPDATE_SUCCESS:
            const newState = state.map(n => (
               n.noteId === action.note.noteId ? action.note : n
            ));
            action.callback();
            return newState;
        case actions.NOTE_UPDATE_FAILURE:
            action.callback();
            return state.slice();
        case actions.NOTE_DELETION_SUCCESS:
            return state.filter(n => n.noteId !== action.noteId);
        case actions.NOTE_DELETION_FAILURE:
            action.callback();
            return state.slice();
        default:
            return state;
    }
}

export default combineReducers({
    token,
    students,
    studentProfiles,
    notes,
    adminId
});


