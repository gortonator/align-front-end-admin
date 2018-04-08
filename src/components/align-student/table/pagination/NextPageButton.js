import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleRight from "@fortawesome/fontawesome-free-solid/faAngleRight";

export default props => (
    <a className={'student-pagination-button' + ' ' + (
        Number(props.currentPage) < Number(props.totalPage) ? '' : 'hide'
    )} href={''}
       onClick={e => {
           e.preventDefault();
           props.goToNextPage();}
       }>
        <FontAwesomeIcon icon={faAngleRight}/>
    </a>
);