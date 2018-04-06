import React from 'react';
import {STUDENT_RETRIEVAL_STATUSES} from "../../../reducers/align-students";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import faRedo from '@fortawesome/fontawesome-free-solid/faRedo';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

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
                props.students.map(student => <StudentRow student={student} key={student.id}/>)
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
    }
}

function StudentRow(props){
    return (
        <div className={"student-table-row"}>
            <div className={"id-cell student-table-cell"}>
                {props.student.nuid}
            </div>
            <div className={"name-cell student-table-cell"}>
                {props.student.name}
            </div>
            <div className={"email-cell student-table-cell"}>
                {props.student.email}
            </div>
            <div className={"enrollment-status-cell student-table-cell"}>
                {props.student.enrollmentStatus}
            </div>
            <div className={"degree-year-cell student-table-cell"}>
                {props.student.degreeYear}
            </div>
        </div>);
}