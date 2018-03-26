import React from 'react';
import AlignStudentHeadingContainer from '../../containers/align-students/AlignStudentHeadingContainer';
import AlignStudentTableContainer from '../../containers/align-students/AlignStudentTableContainer';
import StudentFilterBarContainer from "../../containers/align-students/StudentFilterBarContainer";
import EditStudentFilterModalContainer from "../../containers/align-students/EditStudentFilterModalContainer";

export default (props) => {
    return (
        <div style={theStyle}>
            <EditStudentFilterModalContainer/>
            <AlignStudentHeadingContainer/>
            <StudentFilterBarContainer/>
            <hr/>
            <AlignStudentTableContainer/>
        </div>
    );
}

const theStyle = {
    "max-width": "1224px",
    "margin": "auto",
    "padding": "70px 50px"
};

// export default (props) => <h1>hello</h1>;
