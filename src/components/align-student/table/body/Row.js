import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFileAlt from '@fortawesome/fontawesome-free-regular/faFileAlt';

export default props => (
    <div className={"student-table-row"}>
        <div className={"id-cell student-table-cell"}>
            {props.student.nuid}
        </div>
        <div className={"name-cell student-table-cell"}>
            <a style={{'textDecoration' : 'none'}}
               onClick={e => {
                   e.preventDefault();
                   props.openProfileModal(props.student.nuid);
               }}
               href={''}>
                {props.student.name}
            </a>
            {
                props.student.hasNote && <FontAwesomeIcon icon={faFileAlt} className={'student-note-indicator'}/>
            }
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
    </div>
);