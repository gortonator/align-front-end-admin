import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleLeft from "@fortawesome/fontawesome-free-solid/faAngleLeft";

export default props => (
    <a className={'student-pagination-button' + ' ' + (
        Number(props.currentPage) > 1 ? '' : 'hide'
    )} href={''}
       onClick={e => {
           e.preventDefault();
           props.goToPreviousPage();}
       }>
        <FontAwesomeIcon icon={faAngleLeft}/>
    </a>
);