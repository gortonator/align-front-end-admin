import axios from 'axios';

// Action Types
export const SET_NAME_OR_ID_FILTER = 'SET_NAME_OR_ID_FILTER';
export const SET_CAMPUS_FILTER = 'SET_CAMPUS_FILTER';
export const SET_COOP_FILTER = 'SET_COOP_FILTER';
// export const OPEN_STUDENT_PROFILE_MODAL ='OPEN_STUDENT_PROFILE_MODAL';
// export const CLOSE_STUDENT_PROFILE_MODAL = 'CLOSE_STUDENT_PROFILE_MODAL';
export const OPEN_EDIT_STUDENT_FILTER_MODAL = 'OPEN_EDIT_STUDENT_FILTER_MODAL';
export const CLOSE_EDIT_STUDENT_FILTER_MODAL = 'CLOSE_EDIT_STUDENT_FILTER_MODAL';
export const SHOW_NU_UNDERGRAD_PROPORTION = 'SHOW_NU_UNDERGRAD_PROPORTION';
export const SHOW_ALIGN_ALUMNI_JOBS = 'SHOW_ALIGN_ALUMNI_JOBS';
export const SHOW_ALIGN_COOPS = 'SHOW_ALIGN_COOPS';
export const CLOSE_OVERVIEW_DEEPER_REPORT_MODAL = 'CLOSE_OVERVIEW_DEEPER_REPORT_MODAL';

export const STUDENT_RETRIEVAL_REQUEST = 'STUDENT_RETRIEVAL_REQUEST';
export const STUDENT_RETRIEVAL_SUCCESS = 'STUDENT_RETRIEVAL_SUCCESS';
export const STUDENT_RETRIEVAL_FAILURE = 'STUDENT_RETRIEVAL_FAILURE';

// Edit Student Filters Modal Statuses
export const editStudentFilterModalStatus = {
    CLOSED: 'CLOSED',
    OPENED: 'OPENED'
};

// Overview Deeper Report Modal Statuses
export const overviewDeepReportModalStatus = {
    SHOW_UNDERGRAD_PROPORTION: 'SHOW_UNDERGRAD_PROPORTION',
    SHOW_ALUMNI_JOBS: 'SHOW_ALUMNI_JOBS',
    SHOW_COOPS: 'SHOW_COOPS',
    CLOSED: 'CLOSED'
};

// Action Creators
export function setNameOrIdFilter(input){
    return {
        type: SET_NAME_OR_ID_FILTER,
        filter: input
    };
}

export function setCampusFilter(campus){
    return {
        type: SET_CAMPUS_FILTER,
        campus: campus
    };
}

export function setCoopFilter(coop){
    return {
        type: SET_COOP_FILTER,
        coop: coop
    };
}

// export function openStudentProfileModal(){
//     return {
//         type: OPEN_STUDENT_PROFILE_MODAL
//     };
// }
//
// export function closeStudentProfileModal(){
//     return {
//         type: CLOSE_STUDENT_PROFILE_MODAL
//     };
// }

export function openEditStudentFilterModal(){
    return {
        type: OPEN_EDIT_STUDENT_FILTER_MODAL
    };
}

export function closeEditStudentFilterModal(){
    return {
        type: CLOSE_EDIT_STUDENT_FILTER_MODAL
    };
}

export function showNuUndergradProportion(){
    return {
        type: SHOW_NU_UNDERGRAD_PROPORTION
    };
}

export function showAlignAlumniJobs(){
    return {
        type: SHOW_ALIGN_ALUMNI_JOBS
    };
}

export function showAlignCoops(){
    return {
        type: SHOW_ALIGN_COOPS
    };
}

export function closeOverviewDeeperReportModal(){
    return {
        type: CLOSE_OVERVIEW_DEEPER_REPORT_MODAL
    };
}

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


