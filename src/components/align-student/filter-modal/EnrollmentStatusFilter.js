import React from 'react';
import TogglableOption from '../../common/TogglableOption';
import {ENROLLMENT_STATUSES} from "../../../reducers/align-students";

export default props => (
    <div>
        <div>Enrollment Status</div>
        <TogglableOption containerStyle={'enrollment-status-option-container'}
                         filterStyle={'enrollment-status-option' + ' ' +
                         (props.optionChecker(ENROLLMENT_STATUSES.FULLTIME.value) ? 'selected' : '')}
                         onToggle={props.onOptionToggle(ENROLLMENT_STATUSES.FULLTIME.value)}
                         name={ENROLLMENT_STATUSES.FULLTIME.displayName}/>

        <TogglableOption containerStyle={'enrollment-status-option-container'}
                         filterStyle={'enrollment-status-option' + ' ' +
                         (props.optionChecker(ENROLLMENT_STATUSES.PARTTIME.value) ? 'selected' : '')}
                         onToggle={props.onOptionToggle(ENROLLMENT_STATUSES.PARTTIME.value)}
                         name={ENROLLMENT_STATUSES.PARTTIME.displayName}/>

        <TogglableOption containerStyle={'enrollment-status-option-container'}
                         filterStyle={'enrollment-status-option' + ' ' +
                         (props.optionChecker(ENROLLMENT_STATUSES.INACTIVE.value) ? 'selected' : '')}
                         onToggle={props.onOptionToggle(ENROLLMENT_STATUSES.INACTIVE.value)}
                         name={ENROLLMENT_STATUSES.INACTIVE.displayName + '(Graduated)'}/>

        <TogglableOption containerStyle={'enrollment-status-option-container'}
                         filterStyle={'enrollment-status-option' + ' ' +
                         (props.optionChecker(ENROLLMENT_STATUSES.DROPOUT.value) ? 'selected' : '')}
                         onToggle={props.onOptionToggle(ENROLLMENT_STATUSES.DROPOUT.value)}
                         name={ENROLLMENT_STATUSES.DROPOUT.displayName}/>
    </div>
);