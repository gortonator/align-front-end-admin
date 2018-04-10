import React from 'react';

export default props => (
    <div>
        <div className={"edit-student-filter-modal-button-container"}>
            <a href={""} className={"edit-student-filter-modal-button"}
               onClick={e => {
                   e.preventDefault();
                   props.applyFilters();
               }}>
                Apply
            </a>
        </div>
    </div>
);