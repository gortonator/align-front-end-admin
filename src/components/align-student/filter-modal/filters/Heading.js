import React from 'react';

export default props => (
    <div>
        <h3 className={"edit-student-filter-heading"}>Edit Filters</h3>
        <a href={""}
           className={"clear-filter-link"}
           onClick={e => {
               e.preventDefault();
               props.clearAllFilters();
           }}>
            Clear all filters
        </a>
    </div>
);