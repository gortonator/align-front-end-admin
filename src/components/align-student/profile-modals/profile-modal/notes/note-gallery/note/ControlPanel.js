import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEdit from '@fortawesome/fontawesome-free-solid/faEdit';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';

export default props => (
    <div className={"note-control-panel"}>
        <div className={'note-control-container'}>
            <a href={''}
               onClick={e=> {
                   e.preventDefault();
                   props.startEditing(props.noteId);
               }}>
                <FontAwesomeIcon icon={faEdit}/>
            </a>
        </div>
        <div className={'note-control-container'}>
            <a href={''}
               onClick={e=> {
                   e.preventDefault();
               }}>
                <FontAwesomeIcon icon={faTrash}/>
            </a>

        </div>
    </div>
);