import React from 'react';

export default props => (
    <div className={"table-head"}>
        <div className={"id-cell table-cell"}>
            NUID
        </div>
        <div className={"name-cell table-cell"}>
            Name
        </div>
        <div className={"email-cell table-cell"}>
            Email
        </div>
        <div className={"enrollment-status-cell table-cell"}>
            Enrollment Status
        </div>
        <div className={"degree-year-cell table-cell"}>
            Degree Year
        </div>
    </div>
);