import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus';
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle';

export default props => (
    <div className={'academic-table'}>
        <div className={'table-head'}>
            <div className={'name-cell table-cell'}>
                Course
            </div>
            <div className={'grade-cell table-cell'}>
                Grade
            </div>
            <div className={'retaken-cell table-cell'}>
                Retaken?
            </div>
            <div className={'plagiarism-cell table-cell'}>
                Plagiarism
            </div>
        </div>

        {props.courses.map(c => (
            <div className={'table-row'}>
                <div className={'name-cell table-cell'}>
                    {c.courseId} - {c.courseName}
                </div>
                <div className={'grade-cell table-cell'}>
                    {c.gpa}
                </div>
                <div className={'retaken-cell table-cell'}>
                    {c.retake ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faMinus}/> }
                </div>
                <div className={'plagiarism-cell table-cell'}>
                    {c.plagiarism ? <FontAwesomeIcon icon={faExclamationCircle}/> : <FontAwesomeIcon icon={faMinus}/>}
                </div>
            </div>
        ))}
    </div>
)