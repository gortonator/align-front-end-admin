import axios from 'axios';

// Action Types

export const STUDENT_RETRIEVAL_REQUEST = 'STUDENT_RETRIEVAL_REQUEST';
export const STUDENT_RETRIEVAL_SUCCESS = 'STUDENT_RETRIEVAL_SUCCESS';
export const STUDENT_RETRIEVAL_FAILURE = 'STUDENT_RETRIEVAL_FAILURE';

export const ACCEPT_RETRIEVAL_FAILURE = 'ACCEPT_RETRIEVAL_FAILURE';

// Overview Deeper Report Modal Statuses
export const overviewDeepReportModalStatus = {
    SHOW_UNDERGRAD_PROPORTION: 'SHOW_UNDERGRAD_PROPORTION',
    SHOW_ALUMNI_JOBS: 'SHOW_ALUMNI_JOBS',
    SHOW_COOPS: 'SHOW_COOPS',
    CLOSED: 'CLOSED'
};

// Action Creators

export function studentRetrievalRequest(){
    return {
        type: STUDENT_RETRIEVAL_REQUEST
    };
}

export function applyStudentFilters(studentFilters){
    return dispatch => {
        dispatch(studentRetrievalRequest());
    }
}

export function acceptRetrievalFailure(){
    return {
        type: ACCEPT_RETRIEVAL_FAILURE
    };
}



