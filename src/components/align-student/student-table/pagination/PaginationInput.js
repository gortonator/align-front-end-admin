import React from 'react';

export default props => (
    <div className={'student-pagination-text'}>
        <input className={'form-control'}
               value={props.page}
               onChange={props.handleInputChange}
               onFocus={props.handleFocus}
               onBlur={props.handleBlur}/>

        <a className={'student-pagination-go-to-page-button' + ' ' +
        (props.isEditing ? '' : 'hide')}
           onClick={e => {
               e.preventDefault();
               props.handlePageChange(Number(props.page));}}
           href={''}>
            Go
        </a>
        <span style={{'display': 'inline-block', 'marginLeft':'10px'}}>/ 20</span>
    </div>
);