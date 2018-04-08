import React from 'react';
import StudentSearch from './StudentSearch';

export default props => (
    <div>
        <div style={{'overflow' : 'auto'}}>
            <span className={"student-heading"}>Align Students</span>
            <StudentSearch
                searchByNameOrId={(nameOrId) => {
                    const studentFilters = JSON.parse(JSON.stringify(props.studentFilters));
                    studentFilters.nameOrId = nameOrId;
                    props.applyFilters(studentFilters,props.token,1);
                }}
                nameOrId={props.studentFilters.nameOrId}/>
        </div>
        <a className={'add-filter-button'}
           href={""}
           onClick={
               e => {
                   e.preventDefault();
                   props.openFilterModal();
               }
           }>
            Edit Filters
        </a>
    </div>
);