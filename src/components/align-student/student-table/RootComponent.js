import React from 'react';
import Head from './Head';
import Body from './Body';
import Pagination from './pagination/RootComponent';

export default props => (
    <div>
        <Head/>
        <Body studentRetrievalStatus={props.studentRetrievalStatus}
              students={props.students}
              acceptRetrievalFailure={props.acceptRetrievalFailure}
              applyFilters={props.applyFilters}
              failedAttempt={props.failedAttempt}/>
        <Pagination pagination={props.pagination}
                    studentRetrievalStatus={props.studentRetrievalStatus}
                    applyFilters={props.applyFilters}
                    studentFilters={props.studentFilters}/>
    </div>
)