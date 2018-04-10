import React from 'react';

export default props => (
    <div className={'student-filter'}>
        <div>Undergrad Major</div>
        <input className={'form-control'}
               value={props.value}
               onChange={props.onChange}/>
    </div>
);