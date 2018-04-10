import React from 'react';
import {GENDER_OPTIONS} from '../../../../constants';

export default props => (
    <div className={'student-filter'}>
        <label htmlFor={'student-filter-gender'}>Gender</label>
        <select className={'form-control'}
                id={'student-filter-gender'}
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


