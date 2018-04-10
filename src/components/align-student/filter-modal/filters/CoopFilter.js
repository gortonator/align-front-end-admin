import React from 'react';

export default props => (
    <div className={'student-filter'}>
        <div>Coop Company</div>
        <input className={'form-control'}
               value={props.value}
               onChange={props.onChange}/>
    </div>
);