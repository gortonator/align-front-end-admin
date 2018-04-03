import React from 'react';
import StudentHeadingContainer from '../../redux/align-students/StudentHeading';
import StudentTableContainer from '../../redux/align-students/StudentTable';
import StudentFilterBarContainer from "../../redux/align-students/StudentFilterBarContainer";
import EditStudentFilterModalContainer from "../../redux/align-students/EditStudentFilterModal";

export default (props) => {
    return (
        <div className={'align-student'}>
            <EditStudentFilterModalContainer/>
            <StudentHeadingContainer/>
            {/*<StudentFilterBarContainer/>*/}
            <hr/>
            <StudentTableContainer/>
        </div>
    );
}

// export default (props) => <h1>hello</h1>;
