import React from 'react';
import {ASYNC_ACTION_STATUSES} from "../../../../constants";
import Row from './Row';
import OperationOngoingMessage from '../../../common/OperationOngoingMessage';
import RetrievalFailureMessage from '../../../common/RetriableFailureMessage';

export default props => {
    switch (props.studentRetrievalStatus) {
        case ASYNC_ACTION_STATUSES.ONGOING:
            return (
                <OperationOngoingMessage message={'Retrieving Students...'} className={'student-retrieval-message'}/>
            );
        case ASYNC_ACTION_STATUSES.SUCCESS:
            if (props.showStartMessage){
                return (
                    <div className={'start-message'}>
                        Start the Quest for Students...
                    </div>
                );
            }
            if (props.resultNumber === 0){
                return (
                    <div className={'no-result-message'}>
                        No Results.
                    </div>
                );
            }
            return (
                props.students.map((student, i) => <Row openProfileModal={props.openProfileModal}
                                                        student={student}
                                                        key={student.nuid}/>)
            );
        case ASYNC_ACTION_STATUSES.FAILURE:
            return (
                <RetrievalFailureMessage message={'Student Retrieval Failed.'}
                                         className={'student-retrieval-message'}
                                         onRetry={() => {
                                             props.retryRetrieval();
                                         }}
                                         onCancel={() => {
                                             props.acceptRetrievalFailure();
                                         }}/>
            );
        default:
            return false;
    }
}
