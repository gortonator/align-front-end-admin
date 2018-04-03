import React from 'react';

export default props => (
    <div>
        <h3 className={"edit-student-filter-heading"}>Edit Filters</h3>
        <a href={""}
           className={"clear-filter-link"}
           onClick={props.onClearFilterClick}>
            Clear all filters
        </a>
    </div>
);