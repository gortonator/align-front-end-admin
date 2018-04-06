import React from 'react';
import Heading from '../../redux-bindings/align-students/StudentHeading';
import Table from '../../redux-bindings/align-students/StudentTable';
import AppliedFilters from "../../redux-bindings/align-students/AppliedFilters";
import FilterModal from "../../redux-bindings/align-students/FilterModal";

export default (props) => {
    return (
        <div className={'align-student'}>
            <FilterModal/>
            <Heading/>
            <AppliedFilters/>
            <hr/>
            <Table/>
        </div>
    );
}

// export default (props) => <h1>hello</h1>;
