import React from 'react';

export default props => (
    <div className={'intro-item'}>
        <div className={'field-name'}>
            {props.fieldName}
        </div>
        <div className={'content'}>
            {props.content}
        </div>
    </div>
);