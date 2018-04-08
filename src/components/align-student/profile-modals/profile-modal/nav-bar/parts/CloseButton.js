import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";

export default props => (
    <a className={'student-profile-modal-close-button'}
       href={''}
       onClick={e => {
           e.preventDefault();
           props.closeModal();
       }}>
        <FontAwesomeIcon icon={faTimes}/>
    </a>
);