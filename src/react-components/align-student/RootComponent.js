import React from 'react';
import StudentHeadingContainer from '../../redux-bindings/align-students/StudentHeading';
import StudentTableContainer from '../../redux-bindings/align-students/StudentTable';
import StudentFilterBarContainer from "../../redux-bindings/align-students/AppliedFilters";
import EditStudentFilterModalContainer from "../../redux-bindings/align-students/EditStudentFilterModal";

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
