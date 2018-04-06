import React from 'react';
import StudentSearch from './StudentSearch';

export default props => (
    <div>
        <div style={{'overflow' : 'auto'}}>
            <span className={"student-heading"}>Align Students</span>
            <StudentSearch applyFilters={props.applyFilters} studentFilters={props.studentFilters}/>
        </div>
        <a className={'add-filter-button'}
           href={""}
           onClick={props.onAddFilterButtonClick}>
            Edit Filters
        </a>
    </div>
);