import axios from 'axios';

// Action Types

export const STUDENT_RETRIEVAL_REQUEST = 'STUDENT_RETRIEVAL_REQUEST';
export const STUDENT_RETRIEVAL_SUCCESS = 'STUDENT_RETRIEVAL_SUCCESS';
export const STUDENT_RETRIEVAL_FAILURE = 'STUDENT_RETRIEVAL_FAILURE';

export const STUDENT_PROFILE_RETRIEVAL_REQUEST = 'STUDENT_PROFILE_RETRIEVAL_REQUEST';
export const STUDENT_PROFILE_RETRIEVAL_SUCCESS = 'STUDENT_PROFILE_RETRIEVAL_SUCCESS';
export const STUDENT_PROFILE_RETRIEVAL_FAILURE = 'STUDENT_PROFILE_RETRIEVAL_FAILURE';

export const NOTE_OPERATION_REQUEST = 'NOTE_OPERATION_REQUEST';
export const NOTE_OPERATION_SUCCESS = 'NOTE_OPERATION_SUCCESS';
export const NOTE_OPERATION_FAILURE = 'NOTE_OPERATION_FAILURE';

export const ACCEPT_RETRIEVAL_FAILURE = 'ACCEPT_RETRIEVAL_FAILURE';

// // Overview Deeper Report Modal Statuses
// export const overviewDeepReportModalStatus = {
//     SHOW_UNDERGRAD_PROPORTION: 'SHOW_UNDERGRAD_PROPORTION',
//     SHOW_ALUMNI_JOBS: 'SHOW_ALUMNI_JOBS',
//     SHOW_COOPS: 'SHOW_COOPS',
//     CLOSED: 'CLOSED'
// };

// Action Creators

export function studentRetrievalRequest(){
    return {
        type: STUDENT_RETRIEVAL_REQUEST
    };
}

export function studentRetrievalSuccess(students,totalCount,page){
    return {
        type: STUDENT_RETRIEVAL_SUCCESS,
        students: students,
        totalCount: totalCount,
        page: page
    };
}

export function studentRetrievalFailure(studentFilters,page){
    return {
        type: STUDENT_RETRIEVAL_FAILURE,
        studentFilters: studentFilters,
        page: page
    };
}

export function acceptRetrievalFailure(){
    return {
        type: ACCEPT_RETRIEVAL_FAILURE
    };
}

export function studentProfileRetrievalRequest(nuid){
    return {
        type: STUDENT_PROFILE_RETRIEVAL_REQUEST,
        nuid: nuid
    };
}

export function studentProfileRetrievalSuccess(){
    return {
        type: STUDENT_PROFILE_RETRIEVAL_SUCCESS
    };
}

export function studentProfileRetrievalFailure(){
    return {
        type: STUDENT_PROFILE_RETRIEVAL_FAILURE
    };
}

// Async Actions

export function applyStudentFilters(studentFilters){
    return dispatch => {
        dispatch(studentRetrievalRequest());
    };
}

export function retrieveStudentProfile(nuid){
    return dispatch => {
        dispatch(studentProfileRetrievalRequest(nuid));
    };
}

export function manipulateNote(manipulationType,noteId,nuid){
    return dispacth => {

    };
}



