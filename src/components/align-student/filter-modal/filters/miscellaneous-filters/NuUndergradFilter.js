import React from 'react';
import TogglableOption from '../../../../common/TogglableOption';

export default props => (
    <TogglableOption containerStyle={'nu-undergrad-option-container'}
                     filterStyle={'nu-undergrad-option' + ' ' + (props.checker ? 'selected' : '')}
                     onToggle={props.onToggle}
                     name={'NU Undergrad'}/>
);