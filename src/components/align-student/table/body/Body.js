import React from 'react';
import {ASYNC_ACTION_STATUSES} from "../../../../reducers/align-students";
import Row from './Row';
import RetrievalOngoingMessage from '../../../common/data-retrieval-messages/RetrievalOngoingMessage';
import RetrievalFailureMessage from '../../../common/data-retrieval-messages/RetrievalFailureMessage';

export default props => {
    switch (props.studentRetrievalStatus){
        case ASYNC_ACTION_STATUSES.ONGOING:
            return (
                <RetrievalOngoingMessage message={'Retrieving Students...'}/>
            );
        case ASYNC_ACTION_STATUSES.SUCCESS:
            return (
                props.students.map((student,i) => <Row openProfileModal={props.openProfileModal}
                                                       student={student}
                                                       key={student.nuid}/>)
            );
        case ASYNC_ACTION_STATUSES.FAILURE:
            return (
                <RetrievalFailureMessage message={'Student Retrieval Failed.'}
                                         onRetry={()=> {}}
                                         onCancel={() => {
                                             props.acceptRetrievalFailure();
                                         }}/>
            );
        default:
            return false;
    }
}

