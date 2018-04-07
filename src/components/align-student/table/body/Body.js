import React from 'react';
import {STUDENT_RETRIEVAL_STATUSES} from "../../../../reducers/align-students";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import faRedo from '@fortawesome/fontawesome-free-solid/faRedo';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import Row from './Row';

export default props => {
    switch (props.studentRetrievalStatus){
        case STUDENT_RETRIEVAL_STATUSES.ONGOING:
            return (
                <div className={'student-retrieval-message'}>
                    <FontAwesomeIcon icon={faSpinner} spin/> Retrieving Students...
                </div>
            );
        case STUDENT_RETRIEVAL_STATUSES.SUCCESS:
            return (
                props.students.map((student,i) => <Row openProfileModal={props.openProfileModal} student={student} key={student.nuid}/>)
            );
        case STUDENT_RETRIEVAL_STATUSES.FAILURE:
            return (
                <div className={'student-retrieval-message'}>
                    Students Retrieval Failed.
                    <br/>
                    <a onClick={e => {
                        e.preventDefault();
                        props.applyFilters(props.failedAttempt);}}
                       href={''}>
                        <FontAwesomeIcon icon={faRedo}/> Retry
                    </a>
                    <br/>
                    <a onClick={e => {
                        e.preventDefault();
                        props.acceptRetrievalFailure();}}
                       href={''}>
                        <FontAwesomeIcon icon={faTimes}/> Cancel
                    </a>
                </div>
            );
        default:
            return false;
    }
}

