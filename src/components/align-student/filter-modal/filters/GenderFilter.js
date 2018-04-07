import React from 'react';
import {GENDER_OPTIONS} from '../../../../reducers/align-students';

export default props => (
    <div className={'student-filter'}>
        <div>Gender</div>
        <select className={'form-control'}
                value={props.value}
                onChange={props.onChange}>
            <option value={GENDER_OPTIONS.ANY.value}>
                {GENDER_OPTIONS.ANY.displayName}
            </option>
            <option value={GENDER_OPTIONS.MALE.value}>
                {GENDER_OPTIONS.MALE.displayName}
            </option>
            <option value={GENDER_OPTIONS.FEMALE.value}>
                {GENDER_OPTIONS.FEMALE.displayName}
            </option>
        </select>
    </div>
);


