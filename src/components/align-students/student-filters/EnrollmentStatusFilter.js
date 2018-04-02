import React from 'react';
import TogglableOption from '../TogglableOption';
import {ENROLLMENT_STATUSES} from "../../../reducers/align-students";

export default props => (
    <div>
        <div>Enrollment Status</div>
        <TogglableOption containerStyle={'enrollment-status-option-container'}
                         filterStyle={'enrollment-status-option' + ' ' +
                         (props.isEnrollmentStatusChosen(ENROLLMENT_STATUSES.fullTime) ?
                             'enrollment-status-option-selected' :
                             'enrollment-status-option-unselected')}
                         onToggle={props.toggleEnrollmentStatusFilterOption(ENROLLMENT_STATUSES.fullTime)}
                         name={'Full Time'}/>
        <TogglableOption containerStyle={'enrollment-status-option-container'}
                         filterStyle={'enrollment-status-option' + ' ' +
                         (props.isEnrollmentStatusChosen(ENROLLMENT_STATUSES.partTime) ?
                             'enrollment-status-option-selected' :
                             'enrollment-status-option-unselected')}
                         onToggle={props.toggleEnrollmentStatusFilterOption(ENROLLMENT_STATUSES.partTime)}
                         name={'Part Time'}/>
        <TogglableOption containerStyle={'enrollment-status-option-container'}
                         filterStyle={'enrollment-status-option' + ' ' +
                         (props.isEnrollmentStatusChosen(ENROLLMENT_STATUSES.inactive) ?
                             'enrollment-status-option-selected' :
                             'enrollment-status-option-unselected')}
                         onToggle={props.toggleEnrollmentStatusFilterOption(ENROLLMENT_STATUSES.inactive)}
                         name={'Inactvie(Graduated)'}/>
        <TogglableOption containerStyle={'enrollment-status-option-container'}
                         filterStyle={'enrollment-status-option' + ' ' +
                         (props.isEnrollmentStatusChosen(ENROLLMENT_STATUSES.dropOut) ?
                             'enrollment-status-option-selected' :
                             'enrollment-status-option-unselected')}
                         onToggle={props.toggleEnrollmentStatusFilterOption(ENROLLMENT_STATUSES.dropOut)}
                         name={'Drop out'}/>
    </div>
);