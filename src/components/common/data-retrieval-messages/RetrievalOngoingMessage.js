import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from "@fortawesome/fontawesome-free-solid/faSpinner";

export default props => (
    <div className={'retrieval-message'}>
        <FontAwesomeIcon icon={faSpinner} spin/> {props.message}
    </div>
);