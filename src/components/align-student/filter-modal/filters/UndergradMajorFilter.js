import React from 'react';

export default props => (
    <div className={'student-filter'}>
        <label htmlFor={'student-filter-undergrad-major'}>Undergrad Major</label>
        <input className={'form-control'}
               value={props.value}
               id={'student-filter-undergrad-major'}
               onChange={props.onChange}/>
    </div>
);