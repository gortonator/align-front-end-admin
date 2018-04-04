import React from 'react';

export default props => (
    <div className={"student-table-head"}>
        <div className={"id-cell student-table-cell"}>
            NUID
        </div>
        <div className={"name-cell student-table-cell"}>
            Name
        </div>
        <div className={"email-cell student-table-cell"}>
            Email
        </div>
        <div className={"enrollment-status-cell student-table-cell"}>
            Enrollment Status
        </div>
        <div className={"degree-year-cell student-table-cell"}>
            Degree Year
        </div>
    </div>
);