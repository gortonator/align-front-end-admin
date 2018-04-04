import React from 'react';
import {GENDER_OPTION_VALUE} from '../../../reducers/align-students';

export default props => (
    <div className={'student-filter'}>
        <div>Gender</div>
        <select className={'form-control'}
                value={props.value}
                onChange={props.onChange}>
            <option value={GENDER_OPTION_VALUE.any}>
                Any
            </option>
            <option value={GENDER_OPTION_VALUE.male}>
                Male
            </option>
            <option value={GENDER_OPTION_VALUE.female}>
                Female
            </option>
        </select>
    </div>
);


