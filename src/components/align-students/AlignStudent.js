import React from 'react';
import StudentHeadingContainer from '../../containers/align-students/StudentHeadingContainer';
import StudentTableContainer from '../../containers/align-students/StudentTableContainer';
import StudentFilterBarContainer from "../../containers/align-students/StudentFilterBarContainer";
import EditStudentFilterModalContainer from "../../containers/align-students/EditStudentFilterModalContainer";

export default (props) => {
    return (
        <div style={theStyle}>
            <EditStudentFilterModalContainer/>
            <StudentHeadingContainer/>
            <StudentFilterBarContainer/>
            <hr/>
            <StudentTableContainer/>
        </div>
    );
}

const theStyle = {
    "max-width": "1224px",
    "margin": "auto",
    "padding": "70px 50px"
};

// export default (props) => <h1>hello</h1>;
