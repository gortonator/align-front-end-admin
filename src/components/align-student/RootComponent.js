import React from 'react';
import StudentHeadingContainer from '../../containers/align-students/StudentHeadingContainer';
import StudentTableContainer from '../../containers/align-students/StudentTableContainer';
import StudentFilterBarContainer from "../../containers/align-students/StudentFilterBarContainer";
import EditStudentFilterModalContainer from "../../containers/align-students/EditStudentFilterModalContainer";

export default (props) => {
    return (
        <div className={'align-student'}>
            <EditStudentFilterModalContainer/>
            <StudentHeadingContainer/>
            <StudentFilterBarContainer/>
            <hr/>
            <StudentTableContainer/>
        </div>
    );
}

// export default (props) => <h1>hello</h1>;
