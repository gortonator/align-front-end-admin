import React from 'react';
import AppliedFilter from './AppliedFilter';
import {
    ASYNC_ACTION_STATUSES,
    getMultiSelectableFilterDisplay,
    CAMPUSES, ENROLLMENT_STATUSES, GENDER_OPTIONS} from '../../../reducers/align-students';

export default props => {
    var children;
    switch (props.studentRetrieval){
        case ASYNC_ACTION_STATUSES.ONGOING:
            children = 'Filters Updating...';
            break;
        case ASYNC_ACTION_STATUSES.SUCCESS:
            children = (
                <div>
                    {getNameOrIdFilterDisplay(props.studentFilters.nameOrId)}

                    {getCampusFilterDisplay(props.studentFilters.campus)}

                    {getEnrollmentStatusFilterDisplay(props.studentFilters.enrollmentStatus)}

                    {getCoopFilterDisplay(props.studentFilters.coop)}

                    {getGenderFilterDisplay(props.studentFilters.gender)}

                    {getRaceFilterDisplay(props.studentFilters.race)}

                    {getUndergradMajorFilterDisplay(props.studentFilters.undergradMajor)}

                    {getNuUndergradFilterDisplay(props.studentFilters.nuUndergrad)}

                </div>
            );
            break;
        case ASYNC_ACTION_STATUSES.FAILURE:
            children = 'Update Failed.';
            break;
        default:
            return null;
    }
    return (
        <div className={'applied-filters'}>
            {children}
        </div>
    )
};


function getNameOrIdFilterDisplay(f){
    return (
        f !== '' &&
        <AppliedFilter filterName={Number.isInteger(Number(f)) ? 'NUID' : 'Name'}
                       filterDisplay={f}/>
    );
}

function getCampusFilterDisplay(f){
    const display = getMultiSelectableFilterDisplay(f,CAMPUSES);
    return (
        display !== '' &&
        <AppliedFilter filterName={'Campus'}
                       filterDisplay={display}/>
    );
}

function getEnrollmentStatusFilterDisplay(f){
    const display = getMultiSelectableFilterDisplay(f,ENROLLMENT_STATUSES);
    return (
        display !== '' &&
        <AppliedFilter filterName={'Enrollment Status'}
                       filterDisplay={display}/>
    );
}

function getCoopFilterDisplay(f){
    return (
        f !== '' &&
        <AppliedFilter filterName={'Coop'}
                       filterDisplay={f}/>
    )
}

function getGenderFilterDisplay(f){
    switch (f) {
        case GENDER_OPTIONS.MALE.value:
            return (
                <AppliedFilter filterName={'Gender'}
                               filterDisplay={GENDER_OPTIONS.MALE.displayName}/>
            );
        case GENDER_OPTIONS.FEMALE.value:
            return (
                <AppliedFilter filterName={'Gender'}
                               filterDisplay={GENDER_OPTIONS.FEMALE.displayName}/>
            );
        default:
            return false;
    }
}

function getRaceFilterDisplay(f){
    return (
        f !== '' &&
        <AppliedFilter filterName={'Race'}
                       filterDisplay={f}/>
    )
}

function getUndergradMajorFilterDisplay(f){
    return (
        f !== '' &&
        <AppliedFilter filterName={'Undergrad Major'}
                       filterDisplay={f}/>
    )
}

function getNuUndergradFilterDisplay(f){
    return (
        f && <AppliedFilter filterName={''}
                            filterDisplay={'NU Undergrad'}/>
    )
}




