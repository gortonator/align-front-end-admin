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
              retryRetrieval={() => {
                  props.applyFilters(
                      props.failedStudentRetrieval.studentFilters,
                      props.token,
                      props.failedStudentRetrieval.page)
              }}
              openProfileModal={props.openProfileModal}/>
        <Pagination pagination={props.pagination}
                    studentRetrievalStatus={props.studentRetrievalStatus}
                    goToPage={page => {
                        props.applyFilters(props.studentFilters,props.token,page);
                    }}
                    studentFilters={props.studentFilters}/>
    </div>
)