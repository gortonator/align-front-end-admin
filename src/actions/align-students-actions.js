import axios from 'axios';
import {GENDER_OPTIONS, NUMBER_OF_STUDENTS_PER_PAGE, BASE_URL, ENROLLMENT_STATUSES} from "../constants";
import {doLogout} from "./index";

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

export const ACCEPT_STUDENT_RETRIEVAL_FAILURE = 'ACCEPT_STUDENT_RETRIEVAL_FAILURE';
export const ACCEPT_PROFILE_RETRIEVAL_FAILURE = 'ACCEPT_PROFILE_RETRIEVAL_FAILURE';

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

export function acceptStudentRetrievalFailure(){
    return {
        type: ACCEPT_STUDENT_RETRIEVAL_FAILURE
    };
}

export function studentProfileRetrievalRequest(nuid){
    return {
        type: STUDENT_PROFILE_RETRIEVAL_REQUEST,
        nuid: nuid
    };
}

export function studentProfileRetrievalSuccess(profile,nuid,notes){
    return {
        type: STUDENT_PROFILE_RETRIEVAL_SUCCESS,
        profile: profile,
        nuid: nuid,
        notes: notes
    };
}

export function studentProfileRetrievalFailure(nuid){
    return {
        type: STUDENT_PROFILE_RETRIEVAL_FAILURE,
        nuid: nuid
    };
}

export function acceptProfileRetrievalFailure(nuid){
    return {
        type: ACCEPT_PROFILE_RETRIEVAL_FAILURE,
        nuid: nuid
    };
}

export function noteCreationRequest(nuid){
    return {
        type: NOTE_CREATION_REQUEST,
        nuid: nuid
    };
}

export function noteCreationSuccess(note,callback){
    return {
        type: NOTE_CREATION_SUCCESS,
        note: note,
        callback: callback
    };
}

export function noteCreationFailure(callback){
    return {
        type: NOTE_CREATION_FAILURE,
        callback: callback
    };
}

export function noteUpdateRequest(noteId){
    return {
        type: NOTE_UPDATE_REQUEST,
        noteId: noteId
    };
}

export function noteUpdateSuccess(note,callback){
    return {
        type: NOTE_UPDATE_SUCCESS,
        note: note,
        callback: callback
    };
}

export function noteUpdateFailure(callback){
    return {
        type: NOTE_DELETION_FAILURE,
        callback: callback
    };
}

export function noteDeletionRequest(){
    return {
        type: NOTE_DELETION_REQUEST
    };
}

export function noteDeletionSuccess(noteId,callback){
    return {
        type: NOTE_DELETION_SUCCESS,
        noteId: noteId,
        callback: callback
    };
}

export function noteDeletionFailure(callback){
    return {
        type: NOTE_DELETION_FAILURE,
        callback: callback
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
                            enrollmentStatus: getEnrollmentStatusDisplayNameByValue(s.enrollmentstatus)
                        };
                    });
                    dispatch(studentRetrievalSuccess(
                        students,
                        Math.ceil(Number(response.data.totalcount)/NUMBER_OF_STUDENTS_PER_PAGE),
                        page,
                        studentFilters));
                },
                error => {
                    if (error.response && error.response.status == 406){
                        alert('Session Expired. Please login again');
                        dispatch(doLogout());
                    } else{
                        dispatch(studentRetrievalFailure(studentFilters,page));
                    }
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
        body.nuUndergrad = 'true';
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

function getEnrollmentStatusDisplayNameByValue(value){
    const key = Object.keys(ENROLLMENT_STATUSES).filter(k => ENROLLMENT_STATUSES[k].value === value)[0];
    return ENROLLMENT_STATUSES[key].displayName;
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
                    const notes = response.data.notes.map(n => ({
                        nuid: n.neuId,
                        adminId: n.administratorNeuId,
                        noteId: n.administratorNoteId,
                        title: n.title,
                        desc: n.desc
                    }));
                    dispatch(studentProfileRetrievalSuccess(response.data,nuid,notes));
                },
                error => {
                    // console.error(error);
                    if (error.response && error.response.status == 406){
                        alert('Session Expired. Please login again');
                        dispatch(doLogout());
                    } else {
                        dispatch(studentProfileRetrievalFailure(nuid));
                    }

                }
            );
    };
};

export function createNote(noteContent,nuid,token,adminId,successCallback,failureCallback){
    return dispatch => {
        dispatch(noteCreationRequest());

        axios.post(BASE_URL+'/' + adminId + '/notes',
            {
                neuId: nuid,
                Title: noteContent.title,
                Desc: noteContent.desc
            },
            {
                headers:{
                    token:token
                }
            })
            .then(
                response => {
                    const note = {
                        nuid: response.data.neuId,
                        adminId: response.data.administratorNeuId,
                        noteId : response.data.administratorNoteId,
                        desc: response.data.desc,
                        title: response.data.title,
                    };
                    dispatch(noteCreationSuccess(note,successCallback));
                },
                error => {
                    // console.error(error);
                    if (error.response && error.response.status == 406){
                        alert('Session Expired. Please login again');
                        dispatch(doLogout());
                    } else {
                        dispatch(noteCreationFailure(failureCallback));
                    }
                }
            );
    };
}

export function updateNote(note,token,adminId,successCallback,failureCallback){
    return dispatch => {
        dispatch(noteUpdateRequest());

        axios.put(
            BASE_URL + '/notes/' + note.noteId,
            {
                "administratorNeuId": adminId,
                "title": note.title,
                "desc": note.desc
            },
            {
                headers: {
                    token: token
                }
            }
        )
            .then(
                response => {
                    dispatch(noteUpdateSuccess(note,successCallback));
                },
                error => {
                    // console.error(error);
                    if (error.response && error.response.status == 406){
                        alert('Session Expired. Please login again');
                        dispatch(doLogout());
                    } else{
                        dispatch(noteUpdateFailure(failureCallback));
                    }
                }
            )
    };
}

export function deleteNote(noteId,token,successCallback,failureCallback){
    return dispatch => {
        dispatch(noteDeletionRequest(noteId));
        axios.delete(
            BASE_URL + '/notes/' + noteId,
            {
                headers: {
                    token: token
                }
            }
        )
            .then(
                response => {
                    dispatch(noteDeletionSuccess(noteId,successCallback));
                },
                error => {
                    // console.error(error);
                    if (error.response && error.response.status == 406){
                        alert('Session Expired. Please login again');
                        dispatch(doLogout());
                    } else{
                        dispatch(noteDeletionFailure(failureCallback));
                    }
                }
            );
    };
}
