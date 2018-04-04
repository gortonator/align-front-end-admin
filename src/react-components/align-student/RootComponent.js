import React from 'react';
import StudentHeadingContainer from '../../redux-bindings/align-students/StudentHeadingContainer';
import StudentTableContainer from '../../redux-bindings/align-students/StudentTableContainer';
import StudentFilterBarContainer from "../../redux-bindings/align-students/StudentFilterBarContainer";
import EditStudentFilterModalContainer from "../../redux-bindings/align-students/EditStudentFilterModalContainer";

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
