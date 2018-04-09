import axios from 'axios';
import {GENDER_OPTIONS, NUMBER_OF_STUDENTS_PER_PAGE, BASE_URL} from "../constants";

// Action Types

export const STUDENT_RETRIEVAL_REQUEST = 'STUDENT_RETRIEVAL_REQUEST';
export const STUDENT_RETRIEVAL_SUCCESS = 'STUDENT_RETRIEVAL_SUCCESS';
export const STUDENT_RETRIEVAL_FAILURE = 'STUDENT_RETRIEVAL_FAILURE';

export const STUDENT_PROFILE_RETRIEVAL_REQUEST = 'STUDENT_PROFILE_RETRIEVAL_REQUEST';
export const STUDENT_PROFILE_RETRIEVAL_SUCCESS = 'STUDENT_PROFILE_RETRIEVAL_SUCCESS';
export const STUDENT_PROFILE_RETRIEVAL_FAILURE = 'STUDENT_PROFILE_RETRIEVAL_FAILURE';

export const NOTE_CREATION_REQUEST = 'NOTE_CREATION_REQUEST';
export const NOTE_CREATION_SUCCESS = 'NOTE_CREATION_SUCCESS';
export const NOTE_CREATION_FAILURE = 'NOTE_CREATION_FAILURE';

export const NOTE_UPDATE_REQUEST = 'NOTE_UPDATE_REQUEST';
export const NOTE_UPDATE_SUCCESS = 'NOTE_UPDATE_SUCCESS';
export const NOTE_UPDATE_FAILURE = 'NOTE_UPDATE_FAILURE';

export const NOTE_DELETION_REQUEST = 'NOTE_DELETION_REQUEST';
export const NOTE_DELETION_SUCCESS = 'NOTE_DELETION_SUCCESS';
export const NOTE_DELETION_FAILURE = 'NOTE_DELETION_FAILURE';

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

export function studentRetrievalSuccess(students,totalPage,currentPage,studentFilters){
    return {
        type: STUDENT_RETRIEVAL_SUCCESS,
        students: students,
        totalPage: totalPage,
        currentPage: currentPage,
        studentFilters: studentFilters
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

export function studentProfileRetrievalSuccess(profile,nuid){
    return {
        type: STUDENT_PROFILE_RETRIEVAL_SUCCESS,
        profile: profile,
        nuid: nuid
    };
}

export function studentProfileRetrievalFailure(){
    return {
        type: STUDENT_PROFILE_RETRIEVAL_FAILURE
    };
}

export function noteCreationRequest(nuid){
    return {
        type: NOTE_CREATION_REQUEST,
        nuid: nuid
    };
}

export function noteCreationSuccess(note){
    return {
        type: NOTE_CREATION_SUCCESS,
        note: note
    };
}

export function noteCreationFailure(){
    return {
        type: NOTE_CREATION_FAILURE
    };
}

export function noteUpdateRequest(noteId){
    return {
        type: NOTE_UPDATE_REQUEST,
        noteId: noteId
    };
}

export function noteUpdateSuccess(note){
    return {
        type: NOTE_UPDATE_SUCCESS,
        note: note
    };
}

export function noteUpdateFailure(noteId){
    return {
        type: NOTE_DELETION_FAILURE,
        noteId: noteId
    };
}

export function noteDeletionRequest(noteId){
    return {
        type: NOTE_DELETION_REQUEST,
        noteId: noteId
    };
}

export function noteDeletionSuccess(noteId){
    return {
        type: NOTE_UPDATE_SUCCESS,
        noteId: noteId
    };
}

export function noteDeletionFailure(noteId){
    return {
        type: NOTE_DELETION_FAILURE,
        noteId: noteId
    };
}

// Async Actions

export function applyStudentFilters(studentFilters,token,page){
    return dispatch => {
        dispatch(studentRetrievalRequest());

        axios.post(
            BASE_URL + '/students',
            getStudentSearchRequestBody(studentFilters,page),
            {
                headers: {
                'token': token
                },
            })
            .then(
                response => {
                    const students = response.data.students.map(s => {
                        return {
                            nuid: s.neuid,
                            degreeYear: s.expectedlastyear,
                            email: s.email,
                            hasNote: s.notes.length > 0,
                            name: [s.firstname,s.middlename,s.lastname].join(' '),
                            enrollmentStatus: s.enrollmentstatus
                        };
                    });
                    dispatch(studentRetrievalSuccess(
                        students,
                        Math.ceil(Number(response.data.totalcount)/NUMBER_OF_STUDENTS_PER_PAGE),
                        page,
                        studentFilters));
                },
                error => {
                    dispatch(studentRetrievalFailure(studentFilters,page));
                });
    };
}

function getStudentSearchRequestBody(studentFilters,page){
    const body = {};
    if (studentFilters.nameOrId !== undefined && studentFilters.nameOrId !== ''){
        setRequestBodyNameAndIdFields(studentFilters.nameOrId,body);
    }

    setRequestBodyArrayValuedField(studentFilters.campus,body,'campus');

    setRequestBodyArrayValuedField(studentFilters.enrollmentStatus,body,'enrollmentStatus');

    setRequestBodySingleValuedField(studentFilters.undergradMajor,body,'undergradMajor');

    setRequestBodySingleValuedField(studentFilters.coop,body,'coop');

    setRequestBodySingleValuedField(studentFilters.race,body,'race');

    if (studentFilters.gender !== GENDER_OPTIONS.ANY.value){
        body.gender = studentFilters.gender;
    }

    if (studentFilters.nuUndergrad){
        body.nuUndergrad = true;
    }

    body.beginIndex = (page - 1) * NUMBER_OF_STUDENTS_PER_PAGE + 1;

    body.endIndex = body.beginIndex + NUMBER_OF_STUDENTS_PER_PAGE - 1;

    return body;

}

function setRequestBodyNameAndIdFields(nameOrId,body){
    if (Number.isInteger(Number(nameOrId))){
        body.neuid = nameOrId;
    } else {
        const names = nameOrId.split(' ');
        if (names.length === 1){
            body.firstName = nameOrId;
        } else {
            body.firstName = names[0];
            body.lastName = names[names.length-1];
        }
    }
}

function setRequestBodyArrayValuedField(filter,body,fieldName){
    if (filter.length > 0){
        body[fieldName] = filter;
    }
}

function setRequestBodySingleValuedField(filter,body,fieldName){
    if (filter !== ''){
        body[fieldName] = filter;
    }
}



export function retrieveStudentProfile(nuid,token){
    return dispatch => {
        dispatch(studentProfileRetrievalRequest(nuid));

        axios.get(BASE_URL + '/students/' + nuid,{
            headers: {
                token: token
            }
        })
            .then(
                response => {
                    dispatch(studentProfileRetrievalSuccess(response.data,nuid));
                },
                error => {
                    console.log(error);
                    dispatch(studentProfileRetrievalFailure());
                }
            )
    };
}

export function createNote(noteContent,nuid,token,adminId){
    return dispatch => {
        dispatch(noteCreationRequest(nuid));
    };
}

export function updateNote(note,token,adminId){
    return dispatch => {
        dispatch(noteUpdateRequest(note.noteId));
    };
}

export function deleteNote(noteId,token){
    return dispatch => {
        dispatch(noteDeletionRequest(noteId));
    };
}










