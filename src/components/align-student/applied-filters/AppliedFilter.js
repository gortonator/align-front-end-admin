import React from 'react';

export default props => (
    <a className={'applied-filter'}>
        {props.filterName} {props.filterName !== '' && ':'} {props.filterDisplay}
    </a>
);

