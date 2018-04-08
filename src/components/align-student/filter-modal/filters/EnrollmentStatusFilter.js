import React from 'react';
import TogglableOption from '../../../common/TogglableOption';
import {ENROLLMENT_STATUSES} from "../../../../reducers/align-students";

export default props => (
    <div>
        <div>Enrollment Status</div>
        {Object.keys(ENROLLMENT_STATUSES).map((k,i) => (
            <TogglableOption containerStyle={"enrollment-status-option-container"}
                             filterStyle={"enrollment-status-option" + ' ' +
                             (props.isEnrollmentStatusChosen(ENROLLMENT_STATUSES[k].value) ? "selected" : "")}
                             onToggle={() => {
                                 props.toggleEnrollmentStatusOption(ENROLLMENT_STATUSES[k].value);
                             }}
                             name={ENROLLMENT_STATUSES[k].displayName + (
                                 ENROLLMENT_STATUSES[k].value === ENROLLMENT_STATUSES.INACTIVE.value ?
                                  '(Graduated)' : '')} key={i}/>
        ))}
    </div>
);