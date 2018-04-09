import React from 'react';
import {ASYNC_ACTION_STATUSES} from "../../../../constants";
import Row from './Row';
import RetrievalOngoingMessage from '../../../common/OperationOngoingMessage';
import RetrievalFailureMessage from '../../../common/RetriableFailureMessage';

export default props => {
    switch (props.studentRetrievalStatus){
        case ASYNC_ACTION_STATUSES.ONGOING:
            return (
                <RetrievalOngoingMessage message={'Retrieving Students...'} className={'retrieve-message'}/>
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
                                         onRetry={()=> {props.retryRetrieval();}}
                                         onCancel={() => {
                                             props.acceptRetrievalFailure();
                                         }}/>
            );
        default:
            return false;
    }
}

