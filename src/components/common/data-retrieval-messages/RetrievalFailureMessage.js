import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";
import faRedo from "@fortawesome/fontawesome-free-solid/faRedo";

export default props => (
    <div className={'retrieval-message'}>
        {props.message}
        <br/>
        <a onClick={e => {
            e.preventDefault();
            props.onRetry();}}
           href={''}>
            <FontAwesomeIcon icon={faRedo}/> Retry
        </a>
        <br/>
        <a onClick={e => {
            e.preventDefault();
            props.onCancel();}}
           href={''}>
            <FontAwesomeIcon icon={faTimes}/> Cancel
        </a>
    </div>
);

