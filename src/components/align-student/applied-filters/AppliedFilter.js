import React from 'react';

export default props => (
    <a className={'applied-filter'} style={{'color' : '#B10F1F'}}>
        {props.filterName} {props.filterName !== '' && ':'} {props.filterDisplay}
    </a>
);

