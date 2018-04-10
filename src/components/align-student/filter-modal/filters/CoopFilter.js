import React from 'react';

export default props => (
    <div className={'student-filter'}>
        <label htmlFor={'student-filter-coop'}>Coop Company</label>
        <input className={'form-control'}
               value={props.value}
               onChange={props.onChange} id={'student-filter-coop'}/>
    </div>
);