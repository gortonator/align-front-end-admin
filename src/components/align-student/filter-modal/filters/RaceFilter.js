import React from 'react';

export default props => (
    <div className={'student-filter'}>
        <div>Race</div>
        <input className={'form-control'}
               value={props.value}
               onChange={props.onChange}/>
    </div>
);
