import React from 'react';
import Head from './Head';
import Body from './body/Body';
import Pagination from './pagination/Pagination';

export default props => (
    <div>
        <Head/>
        <Body studentRetrievalStatus={props.studentRetrievalStatus}
              students={props.students}
              acceptRetrievalFailure={props.acceptRetrievalFailure}
              applyFilters={props.applyFilters}
              failedAttempt={props.failedAttempt}
              openProfileModal={props.openProfileModal}/>
        <Pagination pagination={props.pagination}
                    studentRetrievalStatus={props.studentRetrievalStatus}
                    applyFilters={props.applyFilters}
                    studentFilters={props.studentFilters}/>
    </div>
)