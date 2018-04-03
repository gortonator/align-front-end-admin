import React from 'react';
import TogglableOption from '../../TogglableOption';

export default props => (
    <TogglableOption containerStyle={'nu-undergrad-option-container'}
                     filterStyle={'nu-undergrad-option' + ' ' + (
                         props.checker ?
                             'nu-undergrad-option-selected' :
                             'nu-undergrad-option-unselected')}
                     onToggle={props.onToggle}
                     name={'NU Undergrad'}/>
);